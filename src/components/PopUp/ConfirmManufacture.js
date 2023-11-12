import React, { useState, useEffect } from "react";
import useManufacture from "../../store/ManfactureStore";
import { IoMdClose } from "react-icons/io";
import { prindhandle } from "../../contexts/PrintBarcode";
import useSetting from "../../store/appSettingStore";
import { notify } from "../../contexts/Notification";

const ConfirmManufacture = () => {
  //ZUSTAND
  const selectBarcode = useManufacture((state) => state.selectBarcode);
  const setConfirmManu = useManufacture((state) => state.setConfirmManu);
  const addStock = useManufacture((state) => state.addStock);
  const Loading = useManufacture((state) => state.Loading);
  const Success = useManufacture((state) => state.Success);
  const removeAll = useManufacture((state) => state.removeAll);
  const BarcodePath = useSetting((state) => state.BarcodePath);
  //STATE
  const [groupFabric, setGroupFabric] = useState([]);

  useEffect(() => {
    console.log(selectBarcode);
    const groupByCategory = selectBarcode.reduce((group, product) => {
      const { design } = product;
      group[design] = group[design] ?? [];
      group[design].push(product);
      return group;
    }, {});
    const arr = Object.values(groupByCategory);
    const groupByFabric = arr.map((item) => {
      const data = item.reduce((group, product) => {
        const { fabric } = product;
        group[fabric] = group[fabric] ?? [];
        group[fabric].push(product);
        return group;
      }, {});

      return Object.values(data);
    });

    setGroupFabric(groupByFabric);
  }, [selectBarcode]);
  const print = () => {
    if (!BarcodePath) return notify("โปรดเลือกไฟล์สร้างบาร์โค้ด");
    prindhandle(selectBarcode, BarcodePath);
  };
  return (
    <div className="fixed z-40 flex items-center justify-center w-full h-full bg-gray-800 select-none bg-opacity-30 backdrop-blur-sm">
      {Loading && (
        <div className="fixed z-50 flex items-center justify-center w-full h-full select-none backdrop-blur-sm">
          <div className="w-12 h-12 border-8 border-solid rounded-full animate-spin border-highlight border-t-transparent"></div>
        </div>
      )}
      <div className="relative flex flex-col items-center justify-between w-3/4 p-5 h-3/4 bg-third">
        {!Success && (
          <div
            className="absolute p-2 rounded-full cursor-pointer top-3 right-3 text-highlight hover:bg-highlight hover:text-white"
            onClick={setConfirmManu}
          >
            <IoMdClose />
          </div>
        )}
        {!Success && (
          <div className="w-full mb-2 text-xl text-center text-highlight">
            ตรวจสอบรายการสินค้า
          </div>
        )}
        {Success && (
          <div className="w-full mb-2 text-xl text-center text-highlight">
            เพื่มสินค้าเข้าสต๊อคเรียบร้อยแล้ว
          </div>
        )}

        <div className="w-full h-full pb-20 overflow-scroll rounded-lg scrollbar-hide">
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
                              <p>{b.importqty}</p>
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
                    <div className="w-3/6 font-normal">{a.name}</div>
                    <div className="w-1/6 text-center">{a.price}</div>
                    <p>{a.importqty}</p>
                  </div>
                </div>
              ));
          })}
        </div>
        <div className="flex justify-around w-full ">
          {!Success && (
            <button
              onClick={addStock}
              className="px-5 py-2 text-white rounded-lg bg-highlight hover:bg-light"
            >
              เพื่มสินค้าเข้าสต๊อค
            </button>
          )}
          {Success && (
            <button
              onClick={print}
              className="px-5 py-2 text-white rounded-lg bg-highlight hover:bg-light"
            >
              พิมพ์บาร์โค้ด
            </button>
          )}
          {Success && (
            <button
              onClick={removeAll}
              className="px-5 py-2 text-white rounded-lg bg-highlight hover:bg-light"
            >
              เสร็จสิ้น
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConfirmManufacture;
