import React, { useEffect, useState } from "react";
import { Routes, Route, HashRouter, redirect } from "react-router-dom";
import "./App.css";
import { Sidebar, ConfirmManufacture } from "./components";
import { Stock, Import, Export, Barcode, Manufacture, Setting } from "./pages";
import { Toaster } from "react-hot-toast";
import useManufacture from "./store/ManfactureStore";
import useSetting from "./store/appSettingStore";
import axios from "axios";
import { io } from "socket.io-client";

const app = () => {
  axios.defaults.headers.common["token"] = "kVdeNbeYcdcHPXGt";
  //ZUSTAND
  const ConfirmManu = useManufacture((state) => state.ConfirmManu);
  const setStoreSetting = useSetting((state) => state.setStoreSetting);
  const StoreName = useSetting((state) => state.StoreName);
  //SOCKET
  const [socket, setSocket] = useState(null);

  // useEffect(() => {
  //   console.log(StoreName);
  //   if (StoreName !== "") {
  //     const socketconnect = io("http://localhost:7080");
  //     setSocket(socketconnect);
  //     socketconnect?.emit("newUser", StoreName);
  //   }
  // }, [StoreName]);
  useEffect(() => {
    setStoreSetting();
  }, []);
  return (
    <div className=" bg-primary overflow-hidden">
      <Toaster />
      {ConfirmManu && <ConfirmManufacture />}
      <HashRouter>
        <div className="flex relative h-screen overflow-hidden ">
          <div className="h-full w-48 sidebar bg-primary border-r-1 border-secondary">
            <Sidebar />
          </div>

          <div className=" w-full h-full">
            <div className="h-full p-5 ">
              <Routes>
                <Route path="/" element={<Stock />} />
                <Route path="/Stock" element={<Stock />} />
                <Route path="/NewProduct" element={<Manufacture />} />
                <Route path="/Import" element={<Import />} />
                <Route path="/Export" element={<Export />} />
                <Route path="/Barcode" element={<Barcode />} />
                <Route path="/Setting" element={<Setting />} />
              </Routes>
            </div>
          </div>
        </div>
      </HashRouter>
    </div>
  );
};

export default app;
