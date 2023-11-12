import React from "react";
import usePrintBarcode from "../../store/barcodeStore";
const Barcodelist = ({ groupFabric }) => {
  const setbarcode = usePrintBarcode((state) => state.setBarcode);
  return (
    <div className="h-full pb-5 mt-2 overflow-scroll rounded-md scrollbar-hide">
      {groupFabric.map((e, i) => {
        if (e.flat()[0].design)
          return (
            <div
              key={e[0].flat()[0].design}
              className="w-full px-5 py-3 mb-1 text-base font-semibold bg-gray-400 rounded-xl "
            >
              <div>
                {e[0].flat()[0].design.toUpperCase()}/
                <span className="text-base font-normal ">
                  {e[0].flat()[0].name}
                </span>
              </div>
              <div className="w-full ">
                {e.map((a) => (
                  <div
                    key={`${e[0].flat()[0].design}${a[0].fabric}`}
                    className="w-full px-5 "
                  >
                    <div className="flex justify-between mt-1 border-b-1">
                      <p>{a[0].fabric}</p>
                      <p>{a[0].price} ฿</p>
                    </div>
                    <div className="w-full mt-1">
                      {a.map((b) => (
                        <div
                          key={b._id}
                          className="flex justify-between w-full pl-3 text-base font-normal"
                        >
                          <p>{b._id}</p>
                          <p>{b.size}</p>
                          <p
                            id={b._id}
                            className="px-3 py-1 my-1 text-white rounded-md cursor-pointer bg-highlight hover:bg-light"
                            onClick={(e) => setbarcode(e.target.id)}
                          >
                            เพิ่มรายการปริ้น
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
      })}
      {groupFabric.map((e, i) => {
        if (!e.flat()[0].design)
          return e.flat().map((a) => (
            <div
              key={a._id}
              className="w-full px-5 py-2 mb-1 text-lg font-normal bg-gray-400 border rounded-xl "
            >
              <div className="flex justify-between">
                <div className="w-1/6 font-semibold ">{a._id}</div>
                <div className="w-2/6 font-normal">{a.name}</div>
                <div className="w-1/6 text-center">{a.price}</div>
                <p
                  id={a._id}
                  className="px-3 py-1 my-1 text-white rounded-md cursor-pointer bg-highlight hover:bg-light"
                  onClick={(e) => setbarcode(e.target.id)}
                >
                  เพิ่มรายการปริ้น
                </p>
              </div>
            </div>
          ));
      })}
    </div>
  );
};

export default Barcodelist;
