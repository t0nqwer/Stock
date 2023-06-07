import React from "react";
import Header from "../components/Header";
import useSetting from "../store/appSettingStore";

const Setting = () => {
  //ZUSTAND
  const BarcodePath = useSetting((state) => state.BarcodePath);
  const setBarcodePath = useSetting((state) => state.setBarcodePath);
  return (
    <div className=" p-5 w-full h-full flex flex-col bg-third rounded-3xl">
      <Header title="ตั้งค่า" />
      <div className="w-full px-5 text-lg text-center font-semibold py-3 bg-light border  rounded-xl mb-1 ">
        <p>ตั้งค่าไฟล์สร้างบาร์โค้ด</p>
        <div className="w-full bg-white rounded-md my-3">{BarcodePath}</div>
        <label htmlFor="upload">
          <span className=" px-5 my-3 bg-white border border-highlight text-highlight hover:bg-highlight hover:text-white">
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
