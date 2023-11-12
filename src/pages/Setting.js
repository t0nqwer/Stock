import React, { useEffect } from "react";
import Header from "../components/Header";
import useSetting from "../store/appSettingStore";

const Setting = () => {
  //ZUSTAND
  const BarcodePath = useSetting((state) => state.BarcodePath);
  const setBarcodePath = useSetting((state) => state.setBarcodePath);
  console.log(BarcodePath);
  return (
    <div className="flex flex-col w-full h-full p-5 bg-third rounded-3xl">
      <Header title="ตั้งค่า" />
      <div className="w-full px-5 py-3 mb-1 text-lg font-semibold text-center border bg-light rounded-xl ">
        <p>ตั้งค่าไฟล์สร้างบาร์โค้ด</p>
        <div className="w-full my-3 bg-white rounded-md">{BarcodePath}</div>
        <label htmlFor="upload">
          <span className="px-5 my-3 bg-white border border-highlight text-highlight hover:bg-highlight hover:text-white">
            เลือกไฟล์
          </span>
          <input
            type="file"
            id="upload"
            className="hidden"
            onChange={(e) => setBarcodePath(e.target.files[0].path)}
          />
        </label>
      </div>
    </div>
  );
};

export default Setting;
