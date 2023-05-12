import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import "./App.css";
import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import {
  Product,
  Stock,
  Import,
  Export,
  Dashboard,
  Test,
  Barcode,
} from "./pages";
import { useAppContext } from "./contexts/AppContext";
import { useDataContext } from "./contexts/DataContext";
import Loader from "./components/Loader";
import useSetPeople from "./store/store";

const app = () => {
  const { activeMenu, currentColor, isLoading, setIsLoading } = useAppContext();
  const { ProductData, setProductData } = useDataContext();
  const people = useSetPeople((state) => state.people);
  console.log(people);
  // useEffect(() => {
  //   if (navigator.onLine) {
  //     setIsLoading(true);
  //     bridge.FindProduct.send("getProduct", "online");
  //   } else {
  //     bridge.FindProduct.send("getProduct", "offline");
  //   }
  // }, []);
  // bridge.FindProduct.once("getProduct", (arg) => {
  //   setIsLoading(false);
  //   console.log(arg);
  //   setProductData(arg);
  // });

  return (
    <div className=" bg-primary overflow-hidden">
      {isLoading ? (
        <div className=" fixed w-full h-full  bg-gray-800 z-50 bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        ""
      )}
      <HashRouter>
        <div className="flex relative h-screen overflow-hidden ">
          <div className="h-full w-48 sidebar bg-primary border-r-1 border-secondary">
            <Sidebar />
          </div>

          <div className=" w-full h-full">
            <div className="h-full p-5 ">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/Product" element={<Product />} />
                <Route path="/Stock" element={<Stock />} />
                <Route path="/NewProduct" element={<Stock />} />
                <Route path="/Import" element={<Import />} />
                <Route path="/Export" element={<Export />} />
                <Route path="/Barcode" element={<Barcode />} />
              </Routes>
            </div>
          </div>
        </div>
      </HashRouter>
    </div>
  );
};

export default app;
