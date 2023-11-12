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
          if (e.design)
            return (
              <div
                key={e._id}
                className="flex items-center justify-between w-full px-5 mb-1 text-base text-center bg-gray-400 rounded-xl"
              >
                <div
                  className="w-12 px-3 py-1 my-1 text-base text-white rounded-md cursor-pointer bg-primary hover:bg-light"
                  onClick={() => removeSelect(e._id)}
                >
                  ลบ
                </div>
                <div className="w-1/6">{e._id}</div>
                <div className="w-1/6">{e.design}</div>
                <div className="w-2/6 truncate">{e.fabric}</div>
                <div className="w-1/6">{e.size}</div>
                <div className="flex items-center justify-around w-1/6 space-x-2 ">
                  <div
                    id={e._id}
                    className="px-3 py-2 my-1 text-lg font-bold text-white rounded-md cursor-pointer bg-secondary hover:bg-light"
                    onClick={(a) => removeqty(a.currentTarget.id)}
                  >
                    -
                  </div>

                  <div>{e.importqty}</div>
                  <div
                    id={e._id}
                    className="px-3 py-2 my-1 text-lg font-bold text-white rounded-md cursor-pointer bg-highlight hover:bg-light"
                    onClick={(a) => addqty(a.currentTarget.id)}
                  >
                    +
                  </div>
                </div>
              </div>
            );
          if (!e.design)
            return (
              <div
                key={e._id}
                className="flex items-center justify-between w-full px-5 py-1 mb-1 text-base bg-gray-400 rounded-xl"
              >
                <p
                  className="px-3 py-2 my-1 text-base text-white rounded-md cursor-pointer bg-primary hover:bg-light"
                  onClick={() => removeSelect(e._id)}
                >
                  ลบ
                </p>
                <div className="w-1/6">{e._id}</div>
                <div className="w-1/6">{e.name}</div>
                <div className="w-2/6 truncate">{e.brand}</div>
                <div className="flex items-center justify-around w-1/6 space-x-2 ">
                  <div
                    id={e._id}
                    className="px-3 py-2 my-1 text-lg font-bold text-white rounded-md cursor-pointer bg-secondary hover:bg-light"
                    onClick={(a) => removeqty(a.currentTarget.id)}
                  >
                    -
                  </div>

                  <div>{e.importqty}</div>
                  <div
                    id={e._id}
                    className="px-3 py-2 my-1 text-lg font-bold text-white rounded-md cursor-pointer bg-highlight hover:bg-light"
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
