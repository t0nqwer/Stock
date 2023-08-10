import React, { useState, useEffect } from "react";
import useExportStore from "../../store/ExportStore";

const ExportSearch = () => {
  const [group, setGroup] = useState([]);
  const [focus, setFocus] = useState(false);
  const [mouseOn, setMouseOn] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  ////////////////////////////////////////
  //ZUSTAND///////////////////////////////
  ////////////////////////////////////////
  const barcodes = useExportStore((state) => state.Barcode);
  const fetchProduct = useExportStore((state) => state.fetchProduct);
  const search = useExportStore((state) => state.search);
  const setSearch = useExportStore((state) => state.setSearch);
  const setBarcode = useExportStore((state) => state.setBarcode);
  const selectBarcode = useExportStore((state) => state.selectBarcode);
  ////////////////////////////////////////
  //USEEFFECT/////////////////////////////
  ////////////////////////////////////////

  useEffect(() => {
    if (search === "") return;
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
    setGroup(groupByFabric);
  }, [barcodes]);
  useEffect(() => {
    console.log(group);
  }, [group]);
  useEffect(() => {
    if (search === "") {
      setSearchInput("");
    }
  }, [search]);
  useEffect(() => {
    console.log(selectBarcode);
  }, [selectBarcode]);
  useEffect(() => {
    const timmer = setInterval(() => {
      setSearch(searchInput);
    }, 500);
    return () => clearInterval(timmer);
  }, [searchInput]);
  ////////////////////////////////////////
  //FUNCTION//////////////////////////////
  ////////////////////////////////////////
  return (
    <div className="relative w-full mt-5">
      <input
        className="w-full p-2 rounded"
        type="text"
        value={searchInput}
        placeholder="ค้นหาสินค้า"
        onChange={(e) => setSearchInput(e.target.value)}
        onFocus={() => setFocus(true)}
        onBlur={() => {
          if (mouseOn) return;
          setFocus(false);
          setSearchInput("");
          setSearch("");
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setBarcode(e.target.value, true);
            setSearchInput("");
            setSearch("");
          }
        }}
      />
      <div
        className="absolute w-full overflow-y-scroll rounded shadow-lg max-h-96 bg-light"
        onMouseOver={() => setMouseOn(true)}
        onMouseOut={() => setMouseOn(false)}
      >
        {search !== "" &&
          focus &&
          group.length > 0 &&
          group.map((e) => {
            if (e.flat()[0].cloth)
              return e.flat().map((product) => (
                <div
                  key={product.barcode}
                  id={product.barcode}
                  className="flex px-5 py-3 hover:bg-third "
                  onClick={(e) => setBarcode(e.currentTarget.id)}
                >
                  <p className="w-1/9 ">{product.barcode}</p>
                  <p className="w-1/9">{product.code}</p>
                  <p className="w-2/9">{product.name}</p>
                  <p className="w-3/9">{product.fabric}</p>
                  <p className="w-1/9">{product.size}</p>
                  <p className="w-1/9">{product.price}</p>
                </div>
              ));
          })}
        {search !== "" &&
          focus &&
          group.length > 0 &&
          group.map((e) => {
            if (!e.flat()[0].cloth)
              return e.flat().map((product) => (
                <div
                  key={product.barcode}
                  id={product.barcode}
                  className="flex px-5 py-3 hover:bg-third "
                  onClick={(e) => setBarcode(e.currentTarget.id)}
                >
                  <p className="w-1/9 ">{product?.barcode}</p>
                  <p className="w-1/9">{product?.code}</p>
                  <p className="w-2/9">{product?.name}</p>
                  <p className="w-3/9">{product?.fabric}</p>
                  <p className="w-1/9">{product?.size}</p>
                  <p className="w-1/9">{product?.price}</p>
                </div>
              ));
          })}
      </div>
    </div>
  );
};

export default ExportSearch;
