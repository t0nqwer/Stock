import React, { useEffect, useState } from "react";
import {
  Routes,
  Route,
  HashRouter,
  redirect,
  Navigate,
} from "react-router-dom";
import "./App.css";
import { Sidebar, ConfirmManufacture, Loading } from "./components";
import {
  Stock,
  Import,
  Export,
  Barcode,
  Manufacture,
  Setting,
  ExportList,
  AddExport,
} from "./pages";
import { ToastBar, Toaster, toast } from "react-hot-toast";
import useManufacture from "./store/ManfactureStore";
import useSetting from "./store/appSettingStore";
import axios from "axios";
import { io } from "socket.io-client";
import { notify, notifyImportant } from "./contexts/Notification";
import { IoMdCloseCircle } from "react-icons/io";

const socketConnect = io("http://localhost:8586");
const app = () => {
  axios.defaults.headers.common["token"] = "kVdeNbeYcdcHPXGt";
  //ZUSTAND
  const ConfirmManu = useManufacture((state) => state.ConfirmManu);
  const setStoreSetting = useSetting((state) => state.setStoreSetting);
  const StoreName = useSetting((state) => state.StoreName);
  const [load, setLoad] = useState(false);
  //SOCKET
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    setLoad(true);
    // fetch();
    setStoreSetting();
  }, []);
  useEffect(() => {
    socketConnect.on("connect", () => {
      console.log("connect");
      setSocket(socketConnect);
    });
    socketConnect.on("notification", (data) => {
      notifyImportant(data);
    });
  }, [socketConnect]);
  return (
    <div className="overflow-hidden bg-primary">
      {/* {load && <Loading />} */}
      <Toaster>
        {(t) => (
          <ToastBar toast={t}>
            {({ icon, message }) => (
              <>
                {icon}
                {message}
                {t.type !== "loading" && (
                  <button onClick={() => toast.dismiss(t.id)}>
                    <IoMdCloseCircle />
                  </button>
                )}
              </>
            )}
          </ToastBar>
        )}
      </Toaster>
      {ConfirmManu && <ConfirmManufacture />}
      <HashRouter>
        <div className="relative flex h-screen overflow-hidden ">
          <div className="w-48 h-full sidebar bg-primary border-r-1 border-secondary">
            <Sidebar />
          </div>

          <div className="w-full h-full ">
            <div className="h-full p-3 ">
              <Routes>
                <Route path="/" element={<Navigate to={"/Stock"} />} />
                <Route path="/Stock" element={<Stock />} />
                <Route path="/NewProduct" element={<Manufacture />} />
                <Route path="/Import" element={<Import />} />
                <Route path="/Export" element={<ExportList />} />
                <Route path="/Export/:id" element={<AddExport />} />
                <Route path="/Export/new" element={<AddExport />} />
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
