import React, { useEffect, useState } from "react";
import { Header } from "../components";
import useManufacture from "../store/ManfactureStore";
import List from "../components/Manufacture/List";
import Select from "../components/Manufacture/Select";

const Manufacture = () => {
  const [searchInput, setSearchInput] = useState("");
  const [visible, setVisible] = useState(true);

  const [search, setSearch] = useState({ name: "", code: "", barcode: "" });
  const barcodes = useManufacture((state) => state.Barcode);
  const fetchProduct = useManufacture((state) => state.fetchProduct);
  const selectBarcode = useManufacture((state) => state.selectBarcode);
  const setBarcode = useManufacture((state) => state.setBarcode);
  const removeAll = useManufacture((state) => state.removeAll);
  const setConfirmManu = useManufacture((state) => state.setConfirmManu);

  const [groupFabric, setGroupFabric] = useState([]);
  useEffect(() => {
    fetchProduct(search.barcode, search.name, search.code);
    console.log(search);
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
    <div className="flex flex-col w-full h-full p-3 rounded-md select-none bg-third">
      <Header title="เพิ่มสินค้าผลิตใหม่" />
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

          <List groupFabric={groupFabric} />
        </div>
        <div className="w-1/2">
          <div className="flex justify-between w-full px-5 py-3 mb-1 font-semibold rounded-xl ">
            <button
              onClick={removeAll}
              className="px-5 py-2 text-white rounded-lg bg-light hover:bg-highlight"
            >
              ลบทั้งหมด
            </button>
            <p>
              {selectBarcode.length > 0 &&
                selectBarcode
                  ?.map((e) => e?.importqty)
                  ?.reduce((a, b) => a + b)}
            </p>
            <button
              onClick={setConfirmManu}
              className="px-5 py-2 text-white rounded-lg bg-highlight hover:bg-light"
            >
              เพื่มสินค้าเข้าสต๊อค
            </button>
          </div>
          <Select />
        </div>
      </div>
    </div>
  );
};

export default Manufacture;
