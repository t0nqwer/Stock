import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import { IoSettingsSharp } from "react-icons/io5";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import "./App.css";
import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import { Product, Stock, Import, Export, Dashboard } from "./pages";
import { useAppContext } from "./contexts/AppContext";
import { useDataContext } from "./contexts/DataContext";
import { testinvoke } from "./hook/fetch";
const app = () => {
  const { activeMenu, currentColor } = useAppContext();
  const { ProductData, setProductData } = useDataContext();
  useEffect(() => {
    bridge.FindProduct.send("getProduct");
  }, []);
  bridge.FindProduct.once("getProduct", (arg) => {
    console.log(1);
    console.log(arg);
  });
  let buffer = ""; // buffer for constructing the barcode from key presses

  window.addEventListener("keypress", (event) => {
    let data = buffer || "";
    if (event.key !== "Enter") {
      // barcode ends with enter -key
      data += event.key;
      buffer = data;
    } else {
      buffer = "";
      console.log(data);
    }
  });
  return (
    <div>
      <HashRouter>
        <div className="flex relative dark:bg-main-dark-bg">
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
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
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
                ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
                : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            <div>
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
            <Footer />
          </div>
        </div>
      </HashRouter>
    </div>
  );
};

export default app;
