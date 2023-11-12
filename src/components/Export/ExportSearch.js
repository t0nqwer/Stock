import React, { useState, useEffect } from "react";
import useExportStore from "../../store/ExportStore";
import useExportContext from "../../store/ExportContaxt";

const innitialState = {
  barcode: "",
  name: "",
  code: "",
};
const ExportSearch = () => {
  const [search, setSearch] = useState({
    barcode: "",
    name: "",
    code: "",
  });
  const [group, setGroup] = useState([]);
  const [focus, setFocus] = useState(false);
  const [mouseOn, setMouseOn] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  ////////////////////////////////////////
  //ZUSTAND///////////////////////////////
  ////////////////////////////////////////
  const searchresult = useExportContext((state) => state.searchresult);
  const searchFunction = useExportContext((state) => state.searchFunction);

  const setBarcode = useExportStore((state) => state.setBarcode);
  const scanBarcode = useExportContext((state) => state.scanBarcode);
  ////////////////////////////////////////
  //USEEFFECT/////////////////////////////
  ////////////////////////////////////////

  useEffect(() => {
    searchFunction(search);
  }, [search]);
  useEffect(() => {
    console.log(searchresult);
  }, [searchresult]);
  useEffect(() => {
    const groupByCategory = searchresult.reduce((group, product) => {
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
    setGroup(groupByFabric);
  }, [searchresult]);
  // useEffect(() => {
  //   console.log(group);
  // }, [group]);
  // useEffect(() => {
  //   if (search === "") {
  //     setSearchInput("");
  //   }
  // }, [search]);
  // useEffect(() => {
  //   console.log(selectBarcode);
  // }, [selectBarcode]);
  useEffect(() => {
    const timmer = setInterval(() => {
      console.log(searchInput);
      setSearch({ ...search, barcode: searchInput });
    }, 500);
    if (searchInput === search.barcode) {
      clearInterval(timmer);
    }
    return () => {
      clearInterval(timmer);
    };
  }, [searchInput, search.barcode]);
  ////////////////////////////////////////
  //FUNCTION//////////////////////////////
  ////////////////////////////////////////
  const nameHandler = (e) => {
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
    <div className="relative w-full mt-5">
      <div className="flex items-end justify-around mb-1 space-x-2">
        <div className="select-none">
          <p className="text-center text-dark">ค้นหาชื่อ</p>
          <input
            className="w-40 px-4 py-2 font-semibold border-transparent rounded-md outline-none bg-light text-dark placeholder-highlight focus:border-transparent focus:ring-0"
            placeholder="ชื่อสินค้า"
            type="text"
            onFocus={() => {
              setSearch(innitialState);
              setSearchInput("");
            }}
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
            onFocus={() => {
              setSearch(innitialState);
              setSearchInput("");
            }}
            onChange={codeHandler}
            value={search.code}
          />
        </div>
        <div>
          <p className="text-center text-dark">ค้นหาบาร์โค้ด/สแกนบาร์โค้ด</p>
          <input
            className="px-4 py-2 mx-auto font-semibold border-transparent rounded-md outline-none bg-light text-dark placeholder-highlight focus:border-transparent focus:ring-0"
            placeholder="Barcode"
            onFocus={() => setSearch(innitialState)}
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
        <button
          className="px-5 py-2 text-white rounded-lg hover:bg-light bg-highlight"
          onClick={() => {
            setSearch(innitialState);
            setSearchInput("");
          }}
        >
          ล้างคำค้นหา
        </button>
      </div>
      <div
        className="absolute w-full overflow-y-scroll rounded shadow-lg max-h-96 bg-light"
        onMouseOver={() => setMouseOn(true)}
        onMouseOut={() => setMouseOn(false)}
      >
        {searchresult.length > 0 &&
          group.length > 0 &&
          group.map((e) => {
            if (e.flat()[0].design)
              return e.flat().map((product) => (
                <div
                  key={product._id}
                  id={product._id}
                  className="flex px-5 py-3 hover:bg-third "
                  onClick={(e) => {
                    scanBarcode(e.currentTarget.id);
                    setSearchInput("");
                    setSearch(innitialState);
                  }}
                >
                  <p className="w-1/9 ">{product._id}</p>
                  <p className="w-1/9">{product.design}</p>
                  <p className="w-2/9">{product.name}</p>
                  <p className="w-3/9">{product.fabric}</p>
                  <p className="w-1/9">{product.size}</p>
                  <p className="w-1/9">
                    {product.price}-{product.stock}
                  </p>
                </div>
              ));
          })}
        {searchresult.length > 0 &&
          group.length > 0 &&
          group.map((e) => {
            if (!e.flat()[0].design)
              return e.flat().map((product) => (
                <div
                  key={product._id}
                  id={product._id}
                  className="flex px-5 py-3 hover:bg-third "
                  onClick={(e) => {
                    scanBarcode(e.currentTarget.id);
                    setSearchInput("");
                    setSearch(innitialState);
                  }}
                >
                  <p className="w-1/9 ">{product?._id}</p>

                  <p className="w-6/9">{product?.name}</p>
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
