import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [ProductData, setProductData] = useState([]);
  return (
    <DataContext.Provider value={{ ProductData, setProductData }}>
      {" "}
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
