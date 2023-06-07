import React from "react";
import useManufacture from "../../store/ManfactureStore";

const Select = () => {
  const selectBarcode = useManufacture((state) => state.selectBarcode);
  const changePrintQty = useManufacture((state) => state.changePrintQty);
  const printCheck = useManufacture((state) => state.printCheck);
  const removeSelect = useManufacture((state) => state.removeSelect);
  const addqty = useManufacture((state) => state.addqty);
  const removeqty = useManufacture((state) => state.removeqty);

  return (
    <div className="w-full h-full pb-10 overflow-scroll">
      <div className="">
        {selectBarcode.map((e) => {
          if (e.cloth)
            return (
              <div
                key={e.barcode}
                className="w-full px-5 text-base  bg-gray-400 rounded-xl mb-1 flex items-center justify-between text-center"
              >
                <div
                  className=" w-12 py-1 px-3 text-base bg-primary my-1 rounded-md text-white cursor-pointer hover:bg-light"
                  onClick={() => removeSelect(e.barcode)}
                >
                  ลบ
                </div>
                <div className="w-1/6">{e.barcode}</div>
                <div className="w-1/6">{e.code}</div>
                <div className="truncate w-2/6">{e.fabric}</div>
                <div className="w-1/6">{e.size}</div>
                <div className="flex space-x-2 items-center  w-1/6 justify-around ">
                  <div
                    id={e.barcode}
                    className=" font-bold text-lg py-2 px-3 my-1 bg-secondary rounded-md text-white cursor-pointer hover:bg-light   "
                    onClick={(a) => removeqty(a.currentTarget.id)}
                  >
                    -
                  </div>

                  <div>{e.importqty}</div>
                  <div
                    id={e.barcode}
                    className=" font-bold text-lg py-2 px-3 my-1 bg-highlight rounded-md text-white cursor-pointer hover:bg-light"
                    onClick={(a) => addqty(a.currentTarget.id)}
                  >
                    +
                  </div>
                </div>
              </div>
            );
          if (!e.cloth)
            return (
              <div
                key={e.barcode}
                className="w-full px-5 text-base py-1 bg-gray-400 rounded-xl mb-1 flex items-center justify-between"
              >
                <p
                  className=" py-2 px-3 text-base bg-primary my-1 rounded-md text-white cursor-pointer hover:bg-light"
                  onClick={() => removeSelect(e.barcode)}
                >
                  ลบ
                </p>
                <div className="w-1/6">{e.barcode}</div>
                <div className="w-1/6">{e.name}</div>
                <div className="truncate w-2/6">{e.brand}</div>
                <div className="flex space-x-2 items-center  w-1/6 justify-around ">
                  <div
                    id={e.barcode}
                    className=" font-bold text-lg py-2 px-3 my-1 bg-secondary rounded-md text-white cursor-pointer hover:bg-light   "
                    onClick={(a) => removeqty(a.currentTarget.id)}
                  >
                    -
                  </div>

                  <div>{e.importqty}</div>
                  <div
                    id={e.barcode}
                    className=" font-bold text-lg py-2 px-3 my-1 bg-highlight rounded-md text-white cursor-pointer hover:bg-light"
                    onClick={(a) => addqty(a.currentTarget.id)}
                  >
                    +
                  </div>
                </div>
              </div>
            );
        })}
      </div>
    </div>
  );
};

export default Select;
