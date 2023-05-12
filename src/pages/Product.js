import React, { useEffect, useState } from "react";
import { Card, Header } from "../components";
import { useDataContext } from "../contexts/DataContext";
import { useAppContext } from "../contexts/AppContext";
const Product = () => {
  const {
    currentColor,
    activeMenu,
    setActiveMenu,
    handleClick,
    isClicked,
    setScreenSize,
    screenSize,
  } = useAppContext();
  const { ProductData, setProductData } = useDataContext();
  const [showdata, setShowdata] = useState([]);
  const [Showtable, setShowtable] = useState([]);
  const [search, setSearch] = useState("");

  const searchFunction = (e) => {
    if (search === "") return setShowtable(showdata);
    console.log(search);
    console.log(showdata[0].code);
    const findBarcode = showdata.filter((p) =>
      p.product_barcode.toString().includes(search)
    );

    const findCode = showdata.filter((p) => p?.code?.includes(search));
    const findName = showdata.filter((p) => p.title.includes(search));
    const findSize = showdata.filter((p) => p?.size?.includes(search));
    const filterProduct = [
      ...new Set(
        findName.concat(findCode.concat(findBarcode.concat(findSize)))
      ),
    ];
    setShowtable(filterProduct);
  };
  useEffect(() => {
    const removeduplicate = ProductData.filter(
      (value, index, self) =>
        index === self.findIndex((t) => t.product_id === value.product_id)
    );
    setShowdata(removeduplicate);
    setShowtable(removeduplicate);
    console.log(removeduplicate);
  }, [ProductData]);

  return (
    <div className="mt-10 p-10">
      <Header category="" title="รายการสินค้า" />

      <form onSubmitCapture={searchFunction}>
        <input
          className="p-3 rounded-md mr-4 bg-slate-300 focus:outline-none"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />

        <button
          type="submit"
          className="p-3 rounded-md"
          style={{ backgroundColor: currentColor }}
        >
          ค้นหา
        </button>
      </form>
      <div className="grid  sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-10  overflow-scroll">
        {Showtable.map((e) => {
          return (
            <Card
              key={e.product_id}
              code={e.code}
              img={e.front_img}
              pictag1={e.title}
              pigtag2={e.product_id}
              Detail1={"แบรนด์"}
              Info1={e.outside_brand}
              Detail2={"ผ้า"}
              Info2={e.fabric_name}
              Detail3={"ราคา"}
              Info3={e.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Product;
