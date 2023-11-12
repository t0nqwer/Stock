import React from "react";
import usePrintBarcode from "../../store/barcodeStore";

const BarcodeSelect = () => {
  const selectBarcode = usePrintBarcode((state) => state.selectBarcode);
  const changePrintQty = usePrintBarcode((state) => state.changePrintQty);
  const printCheck = usePrintBarcode((state) => state.printCheck);
  const removeSelect = usePrintBarcode((state) => state.removeSelect);
  console.log(selectBarcode);
  return (
    <div className="w-full h-full pb-10 overflow-scroll">
      <div className="">
        {selectBarcode.map((e) => {
          if (e.design)
            return (
              <div
                key={e._id}
                className="grid items-center w-full grid-cols-10 px-5 mb-1 text-sm bg-gray-400 py-1S rounded-xl"
              >
                <p
                  className="px-3 py-2 my-1 text-base text-center text-white rounded-md cursor-pointer bg-primary hover:bg-light"
                  onClick={() => removeSelect(e._id)}
                >
                  ลบ
                </p>
                <div className="col-span-2 text-center ">{e._id}</div>
                <div className="text-center ">{e.design}</div>
                <div className="col-span-4 truncate">{e.fabric}</div>
                <div className="text-center ">{e.size}</div>
                <div className="w-full">
                  <input
                    type="number"
                    className="w-full p-1 text-center "
                    id={e._id}
                    onChange={(p) => changePrintQty(e._id, p.target.value)}
                  ></input>
                </div>
              </div>
            );
          if (!e.design)
            return (
              <div
                key={e._id}
                className="grid items-center w-full grid-cols-10 px-5 mb-1 text-sm bg-gray-400 py-1S rounded-xl"
              >
                <p
                  className="px-3 py-2 my-1 text-base text-center text-white rounded-md cursor-pointer bg-primary hover:bg-light"
                  onClick={() => removeSelect(e._id)}
                >
                  ลบ
                </p>
                <div className="col-span-2 text-center ">{e._id}</div>
                <div className="col-span-4 text-center">{e.name}</div>
                <div className="col-span-2 text-center">{e.brand}</div>
                <div className="w-full">
                  <input
                    type="number"
                    className="w-full p-1 text-center "
                    id={e._id}
                    onChange={(p) => changePrintQty(e._id, p.target.value)}
                  ></input>
                </div>
              </div>
            );
        })}
      </div>
    </div>
  );
};

export default BarcodeSelect;
