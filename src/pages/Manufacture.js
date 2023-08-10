import React, { useEffect, useState } from "react";
import { Header } from "../components";
import useManufacture from "../store/ManfactureStore";
import List from "../components/Manufacture/List";
import Select from "../components/Manufacture/Select";

const Manufacture = () => {
  const [searchInput, setSearchInput] = useState("");
  const barcodes = useManufacture((state) => state.Barcode);
  const fetchProduct = useManufacture((state) => state.fetchProduct);
  const selectBarcode = useManufacture((state) => state.selectBarcode);
  const setSearch = useManufacture((state) => state.setSearch);
  const search = useManufacture((state) => state.search);
  const setBarcode = useManufacture((state) => state.setBarcode);
  const removeAll = useManufacture((state) => state.removeAll);
  const setConfirmManu = useManufacture((state) => state.setConfirmManu);

  const [groupFabric, setGroupFabric] = useState([]);
  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);
  useEffect(() => {
    console.log(selectBarcode);
  }, [selectBarcode]);
  useEffect(() => {
    fetchProduct(search);
  }, [search]);
  useEffect(() => {
    const groupByCategory = barcodes.reduce((group, product) => {
      const { code } = product;
      group[code] = group[code] ?? [];
      group[code].push(product);
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
    fetchProduct(search);
  }, [selectBarcode]);

  // window.addEventListener("keydown", (event) => {
  //   if (event.key === "Enter") {
  //     console.log(1);
  //     setBarcode(search);
  //   }
  // });
  useEffect(() => {
    const timmer = setInterval(() => {
      setSearch(searchInput);
    }, 500);
    return () => clearInterval(timmer);
  }, [searchInput]);
  return (
    <div className="flex flex-col w-full h-full p-5 select-none bg-third rounded-3xl">
      <Header title="เพิ่มสินค้าผลิตใหม่" />
      <div className="flex h-full gap-3 overflow-hidden">
        <div className="w-1/2">
          <div className="flex justify-between w-full px-5 py-3 mb-1 font-semibold rounded-xl ">
            <p>รายการสินค้า</p>
            <input
              id="searchbar"
              className="p-2 border-transparent rounded-md outline-none bg-light text-dark placeholder-primary focus:border-transparent focus:ring-0"
              placeholder="ค้นหา"
              value={searchInput}
              onChange={(e) => {
                setSearchInput(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setBarcode(e.target.value, true);
                  setSearchInput("");
                  setSearch("");
                }
              }}
            />
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
