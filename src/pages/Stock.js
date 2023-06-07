import React, { useEffect, useState } from "react";
import { Header, Table } from "../components";
import useProduct from "../store/store";

const Stock = () => {
  const product = useProduct((state) => state.products);
  const fetchProduct = useProduct((state) => state.fetchProduct);
  const [Showtable, setShowtable] = useState([]);
  const [groupCode, setGroupCode] = useState([]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  useEffect(() => {
    const groupByCategory = product.reduce((group, product) => {
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
      ``;

      return Object.values(data);
    });
    console.log(groupByFabric);
    setGroupCode(arr);
    setShowtable(groupByFabric);
  }, [product]);

  return (
    <div className=" p-5 w-full h-full flex flex-col bg-secondary rounded-3xl">
      <Header category="สินค้า" title="สต๊อคสินค้า" />
      <form>
        <input
          className="py-2 px-4 font-semibold bg-light rounded-md text-dark placeholder-highlight outline-none border-transparent focus:border-transparent focus:ring-0"
          placeholder="ค้นหา"
          onChange={(e) => {
            fetchProduct(e.target.value);
          }}
        />
      </form>
      <Table data={Showtable} groupCode={groupCode} />
    </div>
  );
};

export default Stock;
