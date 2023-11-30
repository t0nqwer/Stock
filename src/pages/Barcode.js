import React, { useEffect, useState } from "react";
import { Header } from "../components";
import usePrintBarcode from "../store/barcodeStore";
import Barcodelist from "../components/Barcode/Barcodelist";
import BarcodeSelect from "../components/Barcode/BarcodeSelect";
import useSetting from "../store/appSettingStore";
import { notify } from "../contexts/Notification";

const Barcode = () => {
  const [search, setSearch] = useState({ name: "", code: "", barcode: "" });
  const [searchInput, setSearchInput] = useState("");
  const setBarcode = usePrintBarcode((state) => state.setBarcode);
  const barcodes = usePrintBarcode((state) => state.Barcode);
  const fetchProduct = usePrintBarcode((state) => state.fetchProduct);
  const selectBarcode = usePrintBarcode((state) => state.selectBarcode);
  const BarcodePath = useSetting((state) => state.BarcodePath);
  const [groupCode, setGroupCode] = useState([]);
  const [groupFabric, setGroupFabric] = useState([]);
  useEffect(() => {
    fetchProduct(search.barcode, search.name, search.code);
  }, [fetchProduct, search]);

  useEffect(() => {
    const groupByCategory = barcodes.reduce((group, product) => {
      const { design } = product;
      group[design] = group[design] ?? [];
      group[design].push(product);
      return group;
    }, {});
    const arr = Object.values(groupByCategory);
    const groupByFabric = arr.map((item) => {
      const data = item.reduce((group, product) => {
        const { fabric } = product;
        group[fabric] = group[fabric] ?? [];
        group[fabric].push(product);
        return group;
      }, {});

      return Object.values(data);
    });
    setGroupCode(arr);
    setGroupFabric(groupByFabric);
  }, [barcodes]);

  useEffect(() => {
    const timmer = setInterval(() => {
      setSearch({ ...search, barcode: searchInput });
    }, 500);
    if (searchInput === search.barcode) {
      clearInterval(timmer);
    }
    return () => {
      clearInterval(timmer);
    };
  }, [searchInput, search.barcode]);
  const prindhandle = () => {
    if (selectBarcode.length === 0) return notify("โปรดเลือกสินค้า");
    if (selectBarcode.filter((item) => item.printqty === 0).length !== 0)
      return notify("โปรดกรอกจำนวนสินค้า");
    if (!BarcodePath) return notify("โปรดเลือกไฟล์สร้างบาร์โค้ด");

    electron.Print.Print({
      selectBarcode,
      PrinterName: "Godex EZ120",
      pageqty: selectBarcode.map((e) => e.printqty).reduce((a, b) => a + b, 0),
    });
  };
  const nameHandler = (e) => {
    if (e.target.value === "") {
      setSearch((state) => ({
        ...state,
        name: "",
      }));
    }
    setSearch((state) => ({
      ...state,
      name: e.target.value,
    }));
  };
  const codeHandler = (e) => {
    if (e.target.value === "") {
      setSearch((state) => ({
        ...state,
        code: "",
      }));
    }
    setSearch((state) => ({
      ...state,
      code: e.target.value,
    }));
  };

  return (
    <div className="flex flex-col w-full h-full p-5 bg-third rounded-3xl">
      <Header title="ปริ้นบาร์โค้ด" />
      <div className="flex h-full gap-3 overflow-hidden">
        <div className="w-1/2">
          <div className="flex items-end justify-around mb-1 space-x-2">
            <div className="select-none">
              <p className="text-center text-dark">ค้นหาชื่อ</p>
              <input
                className="w-40 px-4 py-2 font-semibold border-transparent rounded-md outline-none bg-light text-dark placeholder-highlight focus:border-transparent focus:ring-0"
                placeholder="ชื่อสินค้า"
                type="text"
                onChange={nameHandler}
                value={search.name}
              />
            </div>
            <div className="select-none">
              <p className="text-center text-dark">ค้นหารหัสเสื้อผ้า</p>
              <input
                className="w-40 px-4 py-2 font-semibold border-transparent rounded-md outline-none bg-light text-dark placeholder-highlight focus:border-transparent focus:ring-0"
                placeholder="รหัสเสื้อผ้า"
                type="text"
                onChange={codeHandler}
                value={search.code}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <div>
              <p className="text-center text-dark">
                ค้นหาบาร์โค้ด/สแกนบาร์โค้ด
              </p>
              <input
                className="px-4 py-2 mx-auto font-semibold border-transparent rounded-md outline-none bg-light text-dark placeholder-highlight focus:border-transparent focus:ring-0"
                placeholder="Barcode"
                onChange={(e) => {
                  setSearchInput(e.target.value);
                }}
                value={searchInput}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    setBarcode(searchInput, true);
                    setSearchInput("");
                  }
                }}
              />
            </div>
          </div>
          <Barcodelist groupCode={groupCode} groupFabric={groupFabric} />
        </div>
        <div className="w-1/2">
          <div className="flex items-center justify-end w-full">
            <button
              onClick={prindhandle}
              className="px-5 py-3 mb-1 text-white rounded-lg bg-highlight hover:bg-light"
            >
              พิมพ์
            </button>
          </div>
          <BarcodeSelect />
        </div>
      </div>
    </div>
  );
};

export default Barcode;
