import React, { useEffect, useState } from "react";
import { Header } from "../components";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import useExportListStore from "../store/ExportListStore";
import { notify } from "../contexts/Notification";
const ExportList = () => {
  const list = useExportListStore((state) => state.list);
  const fetchList = useExportListStore((state) => state.fetchList);
  const deleteExport = useExportListStore((state) => state.deleteExport);

  useEffect(() => {
    fetchList();
  }, [fetchList]);
  useEffect(() => {
    console.log(list);
  }, [list]);

  return (
    <>
      <div className="p-5 select-none bg-third rounded-3xl">
        <Header title="ส่งสินค้า" />
        <div className="flex items-center justify-between">
          <p>รายการส่งสินค้า</p>'
          <Link to={"/Export/new"}>
            <button className="px-5 py-2 text-white rounded-lg hover:bg-light bg-highlight">
              เพิ่มรายการส่งสินค้าใหม่
            </button>
          </Link>
        </div>
        <div className="mt-2">
          {list.length > 0 &&
            list.map((item, index) => (
              <div
                key={item.id}
                className="flex items-center w-full px-10 py-3 mb-1 space-x-20 text-base font-semibold bg-gray-400 rounded-xl "
              >
                <div className="flex items-center w-1/9">
                  <div
                    className={`w-3 h-3 mr-2 ${
                      item.status === "draft"
                        ? "bg-third"
                        : item.status === "In Transit"
                        ? "bg-orange-500"
                        : "bg-green-500"
                    }  rounded-full`}
                  ></div>
                  <p>
                    {item.status === "draft"
                      ? "แบบร่าง"
                      : item.status === "In Transit"
                      ? "อยู่ระหว่างขนส่ง"
                      : "bg-green-500"}
                  </p>
                </div>
                <p className="w-2/9">
                  {item.id
                    .split("-")
                    .join("")
                    .split(":")
                    .join("")
                    .split("+")
                    .join("")}
                </p>
                <div className="flex items-center space-x-4 w-3/9 ">
                  <p>ศูนย์การเรียนรู้ขวัญตา</p>
                  <FaLongArrowAltRight className="text-3xl" />
                  <p>{item.shopName}</p>
                </div>
                <p className="w-1/9">{item.time.split("T")[0]}</p>
                <p className="w-1/9">{item?.actionFinished}</p>
                <div className="flex w-1/9 justify-evenly">
                  {item.status === "draft" && (
                    <>
                      <button
                        className="px-3 py-1 text-white bg-red-600 rounded-lg hover:bg-light "
                        onClick={() => deleteExport(item.id)}
                      >
                        ลบ
                      </button>
                      <Link to={`/Export/${item.id}`}>
                        <button className="px-3 py-1 text-white rounded-lg bg-highlight hover:bg-light">
                          แก้ไข
                        </button>
                      </Link>
                    </>
                  )}
                  {item.status === "In Transit" && (
                    <>
                      <button
                        className="px-3 py-1 text-white bg-red-600 rounded-lg hover:bg-light"
                        onClick={() => deleteExport(item.id)}
                      >
                        ลบ
                      </button>
                      <button
                        className="px-3 py-1 text-white rounded-lg bg-highlight hover:bg-light"
                        onClick={() => notify("ยังไม่สามารถใช้งานได้")}
                      >
                        ดูข้อมูล
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default ExportList;
