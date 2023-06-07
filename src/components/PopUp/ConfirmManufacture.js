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
    const groupByCategory = selectBarcode.reduce((group, product) => {
      const { code } = product;
      group[code] = group[code] ?? [];
      group[code].push(product);
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
    <div className=" fixed w-full h-full  bg-gray-800 z-40 bg-opacity-30 backdrop-blur-sm flex justify-center items-center select-none ">
      {Loading && (
        <div className=" w-full h-full fixed z-50 backdrop-blur-sm flex justify-center items-center select-none ">
          <div
            class="w-12 h-12 rounded-full animate-spin
 border-8 border-solid border-highlight border-t-transparent"
          ></div>
        </div>
      )}
      <div className="h-3/4 w-3/4 p-5 bg-third relative flex flex-col justify-between items-center">
        {!Success && (
          <div
            className=" absolute top-3 right-3 text-highlight rounded-full p-2 hover:bg-highlight hover:text-white cursor-pointer"
            onClick={setConfirmManu}
          >
            <IoMdClose />
          </div>
        )}
        {!Success && (
          <div className=" text-xl text-highlight w-full mb-2 text-center">
            ตรวจสอบรายการสินค้า
          </div>
        )}
        {Success && (
          <div className=" text-xl text-highlight w-full mb-2 text-center">
            เพื่มสินค้าเข้าสต๊อคเรียบร้อยแล้ว
          </div>
        )}

        <div className=" w-full h-full overflow-scroll scrollbar-hide rounded-lg pb-20 ">
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
              className=" py-2 bg-highlight hover:bg-light text-white rounded-lg px-5 "
            >
              เพื่มสินค้าเข้าสต๊อค
            </button>
          )}
          {Success && (
            <button
              onClick={print}
              className=" py-2 bg-highlight hover:bg-light text-white rounded-lg px-5 "
            >
              พิมพ์บาร์โค้ด
            </button>
          )}
          {Success && (
            <button
              onClick={removeAll}
              className=" py-2 bg-highlight hover:bg-light text-white rounded-lg px-5 "
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
