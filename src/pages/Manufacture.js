import React, { useEffect, useState } from "react";
import { Header } from "../components";
import useManufacture from "../store/ManfactureStore";
import List from "../components/Manufacture/List";
import Select from "../components/Manufacture/Select";

const Manufacture = () => {
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
  return (
    <div className=" p-5 w-full h-full flex flex-col bg-third rounded-3xl select-none">
      <Header title="เพิ่มสินค้าผลิตใหม่" />
      <div className="flex h-full overflow-hidden gap-3">
        <div className="w-1/2">
          <div className="w-full px-5  font-semibold py-3 justify-between  rounded-xl mb-1 flex ">
            <p>รายการสินค้า</p>
            <input
              className="p-2 bg-light rounded-md text-dark placeholder-primary outline-none border-transparent focus:border-transparent focus:ring-0"
              placeholder="ค้นหา"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>
          <List groupFabric={groupFabric} />
        </div>
        <div className="w-1/2">
          <div className="w-full px-5  font-semibold py-3 justify-between  rounded-xl mb-1 flex ">
            <button
              onClick={removeAll}
              className=" py-2 bg-light hover:bg-highlight text-white rounded-lg px-5 "
            >
              ลบทั้งหมด
            </button>
            <button
              onClick={setConfirmManu}
              className=" py-2 bg-highlight hover:bg-light text-white rounded-lg px-5 "
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
