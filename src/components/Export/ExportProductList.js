import React from "react";
import useExportStore from "../../store/ExportStore";

const ExportProductList = () => {
  const selectBarcode = useExportStore((state) => state.selectBarcode);
  const removeSelect = useExportStore((state) => state.removeSelect);
  const removeqty = useExportStore((state) => state.removeqty);
  const addqty = useExportStore((state) => state.addqty);
  const changeqty = useExportStore((state) => state.changeqty);
  return (
    <div>
      {selectBarcode.length > 0 &&
        selectBarcode
          .slice(0)
          .reverse()
          .map((product) => (
            <div
              key={product.barcode}
              id={product.barcode}
              className="flex items-center px-5 py-2 hover:bg-third border-b-1 border-primary "
            >
              <div className="w-1/12">
                <button
                  className="px-3 py-1 my-1 text-base text-white rounded-md cursor-pointer bg-primary hover:bg-light"
                  onClick={() => removeSelect(product.barcode)}
                >
                  ลบ
                </button>
              </div>
              <p className="w-1/12 ">{product.barcode}</p>
              <p className="w-1/12">{product.code}</p>
              <p className="w-2/12">{product.name}</p>
              <p className="w-3/12">{product.fabric}</p>
              <p className="w-1/12">{product.size}</p>
              <p className="w-1/12">{product.price}</p>
              <div className="flex w-1/12 space-x-2">
                <div
                  id={product.barcode}
                  className="px-3 py-1 my-1 text-lg font-bold text-white rounded-md cursor-pointer bg-secondary hover:bg-light"
                  onClick={(a) => removeqty(a.currentTarget.id)}
                >
                  -
                </div>

                <input
                  className="p-2 text-center rounded"
                  type="number"
                  value={product.importqty}
                  onChange={(e) =>
                    changeqty(product.barcode, +e.currentTarget.value)
                  }
                />
                <div
                  id={product.barcode}
                  className="px-3 py-1 my-1 text-lg font-bold text-white rounded-md cursor-pointer bg-highlight hover:bg-light"
                  onClick={(a) => addqty(a.currentTarget.id)}
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
