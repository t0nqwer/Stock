import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import { IoSettingsSharp } from "react-icons/io5";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import "./App.css";
import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import { Product, Stock, Import, Export, Dashboard, Test } from "./pages";
import { useAppContext } from "./contexts/AppContext";
import { useDataContext } from "./contexts/DataContext";
import { testinvoke, checkOnlineStatus } from "./hook/fetch";
import Loader from "./components/Loader";
const app = () => {
  const { activeMenu, currentColor, isLoading, setIsLoading } = useAppContext();
  const { ProductData, setProductData } = useDataContext();

  useEffect(() => {
    if (navigator.onLine) {
      // make data request
      setIsLoading(true);
      bridge.FindProduct.send("getProduct", "online");
    } else {
      bridge.FindProduct.send("getProduct", "offline");
    }
  }, []);
  bridge.FindProduct.once("getProduct", (arg) => {
    setIsLoading(false);
    console.log(arg);
    setProductData(arg);
  });

  return (
    <div className="h-full">
      {isLoading ? (
        <div className=" fixed w-full h-full  bg-gray-800 z-50 bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        ""
      )}
      <HashRouter>
        <div className="flex relative dark:bg-main-dark-bg h-full">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Setting" position="Top">
              <button
                type="button"
                style={{ background: currentColor, borderRadius: "50%" }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <IoSettingsSharp />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="  h-full w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? "dark:bg-main-dark-bg  bg-main-bg h-full md:ml-72 w-full  flex flex-col overflow-hidden   "
                : "bg-main-bg dark:bg-main-dark-bg  w-full h-full flex flex-col overflow-hidden  "
            }
          >
            <div className=" bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            <div className="">
              {/* {themeSettings && <ThemeSettings />} */}

              <Routes>
                {/* dashboard  */}
                <Route path="/" element={<Dashboard />} />
                <Route path="/Product" element={<Product />} />
                <Route path="/Stock" element={<Stock />} />
                <Route path="/Import" element={<Import />} />
                <Route path="/Export" element={<Export />} />
              </Routes>
            </div>
          </div>
        </div>
      </HashRouter>
    </div>
  );
};

export default app;
