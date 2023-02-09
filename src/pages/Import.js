import React, { useEffect, useState } from "react";
import { Header } from "../components";
import { useDataContext } from "../contexts/DataContext";

const Import = () => {
  const { ProductData, setProductData } = useDataContext();
  const [SearchProduct, setSearchProduct] = useState([]);

  const searchFunction = (e) => {
    if (e.target.value === "") return setSearchProduct([]);
    console.log(e.target.value);
    console.log(ProductData[0].code);
    const findBarcode = ProductData.filter((p) =>
      p.product_barcode.toString().includes(e.target.value)
    );

    const findCode = ProductData.filter((p) =>
      p?.code?.includes(e.target.value)
    );
    const findName = ProductData.filter((p) =>
      p.title.includes(e.target.value)
    );
    const findSize = ProductData.filter((p) =>
      p?.size?.includes(e.target.value)
    );
    const filterProduct = [
      ...new Set(
        findName.concat(findCode.concat(findBarcode.concat(findSize)))
      ),
    ];
    setSearchProduct(filterProduct);
  };
  return (
    <div className="h-full p-3">
      <div className=" h-full p-5   bg-white rounded-3xl">
        <Header category="สินค้า" title="นำสินค้าเข้า" />
        <div className="w-full relative ">
          <input
            className="w-full p-5 text-2xl bg-gray-500 rounded-lg focus:outline-none"
            placeholder="ค้นหาสินค้า"
            onChange={searchFunction}
          />
          <div className="absolute w-full rounded-lg overflow-hidden">
            {SearchProduct.map((e, i) => {
              if (i < 11)
                return (
                  <div
                    key={e?.product_barcode}
                    className="w-full py-2 px-5 text-sm md:text-base xl:text-xl bg-gray-400  grid grid-cols-12 "
                  >
                    <span className="col-span-2">{e?.product_barcode}</span>
                    <span className="col-span-8">{e?.title}</span>

                    <span className="col-span-1">{e?.code}</span>
                    <span className="col-span-1">{e?.size}</span>
                  </div>
                );
            })}
          </div>
          <div>data</div>
        </div>
      </div>
    </div>
  );
};

export default Import;
