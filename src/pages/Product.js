import React, { useEffect, useState } from "react";
import { Card } from "../components";
import { useDataContext } from "../contexts/DataContext";
const Product = () => {
  const { ProductData, setProductData } = useDataContext();
  const [showdata, setShowdata] = useState([]);
  useEffect(() => {
    const removeduplicate = ProductData.filter(
      (value, index, self) =>
        index === self.findIndex((t) => t.product_id === value.product_id)
    );
    setShowdata(removeduplicate);
    console.log(removeduplicate);
  }, [ProductData]);

  return (
    <div className="grid grid-cols-4 gap-6 mt-5 p-5 overflow-scroll">
      {showdata.map((e) => {
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
  );
};

export default Product;
