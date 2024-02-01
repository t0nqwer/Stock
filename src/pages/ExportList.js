import React, { useEffect, useState } from "react";
import { Header } from "../components";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import useExportListStore from "../store/ExportListStore";
import { notify } from "../contexts/Notification";
import useExportContext from "../store/ExportContaxt";
import axios from "axios";
import { URL } from "../contexts/Url";
const ExportList = () => {
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [deleteId, setDeleteId] = useState("");

  const list = useExportListStore((state) => state.list);
  const fetchList = useExportListStore((state) => state.fetchList);
  const deleteExport = useExportListStore((state) => state.deleteExport);
  const reset = useExportContext((state) => state.reset);
  useEffect(() => {
    reset();
  }, []);
  useEffect(() => {
    fetchList();
  }, [fetchList]);
  useEffect(() => {
    console.log(list.reverse());
  }, [list]);

  const printInvoid = async (id) => {
    try {
      const { data } = await axios.get(`${URL}stock/PrintExport/${id}`);
      electron.printTransfer(data);
    } catch (error) {}
  };

  return (
    <>
      {confirmDelete && (
        <div className="fixed z-50 flex items-center justify-center w-full h-full select-none backdrop-blur-sm">
          <div className="flex flex-col items-center justify-center w-1/3 bg-white h-1/3 rounded-2xl">
            <p className="text-xl font-semibold">ยืนยันการลบ</p>
            <p className="text-center">คุณต้องการลบรายการส่งสินค้าหรือไม่</p>
            <div className="flex items-center justify-center w-full mt-5 space-x-3">
              <button
                className="px-3 py-1 text-white bg-red-600 rounded-lg hover:bg-light"
                onClick={() => {
                  setDeleteId("");
                  setConfirmDelete(false);
                }}
              >
                ยกเลิก
              </button>
              <button
                className="px-3 py-1 text-white rounded-lg bg-highlight hover:bg-light"
                onClick={() => {
                  deleteExport(deleteId);
                  setDeleteId("");
                  setConfirmDelete(false);
                }}
              >
                ยืนยัน
              </button>
            </div>
          </div>
        </div>
      )}
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
        <div className="grid items-center w-full grid-cols-10 gap-4 px-3 py-3 mt-2 mb-1 space-x-1 text-base font-semibold bg-gray-400 rounded-md ">
          <p className="w-full text-center">สถานะ</p>
          <p className="w-full text-center">เลขที่</p>
          <div className="flex items-center justify-around col-span-4 ">
            <p className="">จาก</p>

            <p className="">ไปยัง</p>
          </div>
          <p className="w-full text-center">วันที่สร้าง</p>
          <p className="w-full text-center">วันที่ส่ง</p>
          <p className="w-full col-span-2 text-center">จัดการ</p>
        </div>
        <div className="mt-2">
          {list.length > 0 &&
            list.reverse().map((item, index) => (
              <div
                key={item.id}
                className="grid items-center w-full grid-cols-10 gap-4 px-3 py-3 mb-1 space-x-1 text-base font-semibold bg-gray-400 rounded-md "
              >
                <div className="flex items-center">
                  <div
                    className={`w-3 h-3 mr-1 ${
                      !item.status
                        ? "bg-third"
                        : item.status === "transport"
                        ? "bg-orange-500"
                        : item.status === "cancel"
                        ? "bg-red-500"
                        : "bg-green-500"
                    }  rounded-full`}
                  ></div>
                  <p className="">
                    {!item.status
                      ? "แบบร่าง"
                      : item.status === "transport"
                      ? "กำลังส่ง"
                      : item.status === "cancel"
                      ? "ยกเลิก"
                      : "ส่งสำเร็จ"}
                  </p>
                </div>
                <p className="flex items-center text-sm ">{item._id}</p>
                <div className="flex items-center justify-center col-span-4 text-center ">
                  <p>{item.from}</p>
                  <FaLongArrowAltRight className="px-1 text-2xl" />
                  <p>{item.to}</p>
                </div>
                <p className="flex justify-center ">
                  {item.createAt.split("T")[0]}
                </p>
                <p className="flex justify-center ">
                  {item?.arriveAt ? item?.arriveAt : "-"}
                </p>
                <div className="flex col-span-2 justify-evenly">
                  {!item.status && (
                    <>
                      <button
                        className="px-3 py-1 text-white bg-red-600 rounded-lg hover:bg-light "
                        onClick={() => deleteExport(item._id)}
                      >
                        ลบ
                      </button>
                      <Link to={`/Export/${item._id}`}>
                        <button className="px-3 py-1 text-white rounded-lg bg-highlight hover:bg-light">
                          แก้ไข
                        </button>
                      </Link>
                    </>
                  )}
                  {item.status === "transport" && (
                    <>
                      <button
                        className="px-3 py-1 text-white bg-red-600 rounded-lg hover:bg-light"
                        // onClick={() => deleteExport(item._id)}
                        onClick={() => {
                          setConfirmDelete(true);
                          setDeleteId(item._id);
                        }}
                      >
                        ลบ
                      </button>
                      <button
                        className="px-3 py-1 text-white rounded-lg bg-highlight hover:bg-light"
                        onClick={() => printInvoid(item._id)}
                      >
                        พิมพ์
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
