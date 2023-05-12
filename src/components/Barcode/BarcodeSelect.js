import React from "react";
import usePrintBarcode from "../../store/barcodeStore";

const BarcodeSelect = () => {
  const selectBarcode = usePrintBarcode((state) => state.selectBarcode);
  const changePrintQty = usePrintBarcode((state) => state.changePrintQty);
  const printCheck = usePrintBarcode((state) => state.printCheck);
  const removeSelect = usePrintBarcode((state) => state.removeSelect);

  return (
    <div className="w-full h-full pb-10 overflow-scroll">
      <div className="">
        {selectBarcode.map((e) => (
          <div
            key={e.barcode}
            className="w-full px-5 text-base py-1S bg-gray-400 rounded-xl mb-1 flex items-center justify-between"
          >
            <p
              className=" py-2 px-3 text-base bg-primary my-1 rounded-md text-white cursor-pointer hover:bg-light"
              onClick={() => removeSelect(e.barcode)}
            >
              ลบ
            </p>
            <div>{e.barcode}</div>
            <div>{e.code}</div>
            <div className="truncate">{e.fabric}</div>
            <div>{e.size}</div>
            <div>
              <input
                type="number"
                id={e.barcode}
                onChange={(p) => changePrintQty(e.barcode, p.target.value)}
              ></input>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarcodeSelect;
