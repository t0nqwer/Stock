import React from "react";
import useManufacture from "../../store/ManfactureStore";
const List = ({ groupFabric }) => {
  const setbarcode = useManufacture((state) => state.setBarcode);
  return (
    <div className="h-full overflow-scroll scrollbar-hide rounded-lg pb-20">
      {groupFabric.map((e, i) => {
        if (e.flat()[0].cloth)
          return (
            <div
              key={e[0].flat()[0].code}
              className="w-full px-5 text-base font-semibold py-3 bg-gray-400 rounded-xl mb-1 "
            >
              <div>
                {e[0].flat()[0].code.toUpperCase()}/
                <span className=" text-base font-normal">
                  {e[0].flat()[0].name}
                </span>
              </div>
              <div className="w-full ">
                {e.map((a) => (
                  <div
                    key={`${e[0].flat()[0].code}${a[0].fabric}`}
                    className="px-5 w-full "
                  >
                    <div className="flex justify-between  mt-1  border-b-1">
                      <p>{a[0].fabric}</p>
                      <p>{a[0].price} ฿</p>
                    </div>
                    <div className="w-full mt-1">
                      {a.map((b) => (
                        <div
                          key={b.barcode}
                          className="flex w-full justify-between pl-3 text-base font-normal"
                        >
                          <p>{b.barcode}</p>
                          <p>{b.size}</p>
                          <p
                            id={b.barcode}
                            className=" py-1 px-3 bg-highlight my-1 rounded-md text-white cursor-pointer hover:bg-light"
                            onClick={(e) => setbarcode(e.target.id)}
                          >
                            เพิ่มรายการ
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
        if (!e.flat()[0].cloth)
          return e.flat().map((a) => (
            <div
              key={a.barcode}
              className="w-full px-5  text-lg font-normal py-2 bg-gray-400 border  rounded-xl mb-1 "
            >
              <div className="flex justify-between">
                <div className=" w-1/6 font-semibold">{a.barcode}</div>
                <div className="w-3/6 font-normal">{a.name}</div>
                <div className="w-1/6 text-center">{a.price}</div>
                <p
                  id={a.barcode}
                  className=" py-1 px-3 bg-highlight my-1 rounded-md text-white cursor-pointer hover:bg-light"
                  onClick={(e) => setbarcode(e.target.id)}
                >
                  เพิ่มรายการ
                </p>
              </div>
            </div>
          ));
      })}
    </div>
  );
};

export default List;
