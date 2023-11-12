import React from "react";
import useExportStore from "../../store/ExportStore";
import useExportContext from "../../store/ExportContaxt";
import { notify } from "../../contexts/Notification";

const ExportProductList = () => {
  const removeSelect = useExportContext((state) => state.removeSelect);
  const setQty = useExportContext((state) => state.setQty);
  const addQty = useExportContext((state) => state.addQty);
  const decreaseQty = useExportContext((state) => state.decreaseQty);

  const selectData = useExportContext((state) => state.selectData);
  console.log(selectData);
  return (
    <div className="w-full">
      {selectData.length > 0 &&
        selectData
          .slice(0)
          .reverse()
          .map((product) => (
            <div
              key={product._id}
              id={product._id}
              className="flex items-center w-full px-3 py-2 hover:bg-third border-b-1 border-primary "
            >
              <div className="w-1/12">
                <button
                  className="px-3 py-1 my-1 text-base text-white rounded-md cursor-pointer bg-primary hover:bg-light"
                  onClick={() => removeSelect(product._id)}
                >
                  ลบ
                </button>
              </div>
              <p className="w-1/12 ">{product._id}</p>
              <p className="w-1/12">{product.design}</p>
              <p className="w-2/12">{product.name}</p>
              <p className="w-3/12">{product.fabric}</p>
              <p className="w-1/12">{product.size}</p>
              <p className="w-1/12">{product.price}</p>
              <div className="flex w-2/12 space-x-2">
                <div
                  id={product._id}
                  className="px-3 py-1 my-1 text-lg font-bold text-white rounded-md cursor-pointer bg-secondary hover:bg-light"
                  onClick={(a) => decreaseQty(a.currentTarget.id)}
                >
                  -
                </div>

                <input
                  className="w-16 p-2 text-center rounded "
                  type="text"
                  value={product.qty}
                  onChange={(e) => {
                    setQty(e.currentTarget.value, product._id);
                  }}
                />
                <div
                  id={product._id}
                  className="px-3 py-1 my-1 text-lg font-bold text-white rounded-md cursor-pointer bg-highlight hover:bg-light"
                  onClick={(a) => addQty(a.currentTarget.id)}
                >
                  +
                </div>
              </div>
            </div>
          ))}
    </div>
  );
};

export default ExportProductList;
