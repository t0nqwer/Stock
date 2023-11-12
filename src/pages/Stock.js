import React, { useEffect, useState } from "react";
import { Header, Table } from "../components";
import useProduct from "../store/store";

const Stock = () => {
  const product = useProduct((state) => state.products);
  const fetchProduct = useProduct((state) => state.fetchProduct);
  const [Showtable, setShowtable] = useState([]);
  const [groupCode, setGroupCode] = useState([]);
  const [search, setSearch] = useState({
    price: "",
    name: "",
    code: "",
    barcode: "",
    isStock: false,
  });

  useEffect(() => {
    fetchProduct(
      search.barcode,
      search.price,
      search.name,
      search.code,
      search.isStock
    );
  }, [fetchProduct, search]);
  useEffect(() => {
    const groupByCategory = product.reduce((group, product) => {
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
    setShowtable(groupByFabric);
  }, [product]);

  const isStockHandler = (e) => {
    setSearch((state) => ({
      ...state,
      isStock: !state.isStock,
    }));
  };
  const priceHandler = (e) => {
    if (e.target.value === "") {
      setSearch((state) => ({
        ...state,
        price: "",
      }));
    }
    setSearch((state) => ({
      ...state,
      price: e.target.value,
    }));
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
  const barcodeHandler = (e) => {
    if (e.target.value === "") {
      setSearch((state) => ({
        ...state,
        barcode: "",
      }));
    }
    setSearch((state) => ({
      ...state,
      barcode: e.target.value,
    }));
  };

  return (
    <div className="flex flex-col w-full h-full p-5 bg-secondary rounded-3xl">
      <Header category="สินค้า" title="สต๊อคสินค้า" />
      <div className="flex items-end justify-between mb-2">
        <div className="flex space-x-2 select-none">
          <p
            className={
              search.isStock
                ? "p-2 rounded-md bg-highlight text-white font-bold"
                : `p-2 rounded-md bg-light text-highlight`
            }
            onClick={isStockHandler}
          >
            มีสต๊อค
          </p>
        </div>

        <div className="select-none">
          <p className="text-center text-highlight">ค้นหาราคา</p>
          <input
            className="w-40 px-4 py-2 font-semibold border-transparent rounded-md outline-none bg-light text-dark placeholder-highlight focus:border-transparent focus:ring-0"
            placeholder="ราคา"
            type="number"
            onChange={priceHandler}
            value={search.price}
          />
        </div>
        <div className="select-none">
          <p className="text-center text-highlight">ค้นหาชื่อ</p>
          <input
            className="w-40 px-4 py-2 font-semibold border-transparent rounded-md outline-none bg-light text-dark placeholder-highlight focus:border-transparent focus:ring-0"
            placeholder="ชื่อสินค้า"
            type="text"
            onChange={nameHandler}
            value={search.name}
          />
        </div>
        <div className="select-none">
          <p className="text-center text-highlight">ค้นหารหัสเสื้อผ้า</p>
          <input
            className="w-40 px-4 py-2 font-semibold border-transparent rounded-md outline-none bg-light text-dark placeholder-highlight focus:border-transparent focus:ring-0"
            placeholder="รหัสเสื้อผ้า"
            type="text"
            onChange={codeHandler}
            value={search.code}
          />
        </div>
        <div>
          <p className="text-center text-highlight">ค้นหาบาร์โค้ด</p>
          <input
            className="px-4 py-2 font-semibold border-transparent rounded-md outline-none bg-light text-dark placeholder-highlight focus:border-transparent focus:ring-0"
            placeholder="Barcode"
            onChange={barcodeHandler}
            value={search.barcode}
          />
        </div>
      </div>

      <Table data={Showtable} groupCode={groupCode} />
    </div>
  );
};

export default Stock;
