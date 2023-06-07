import { create } from "zustand";
import axios from "axios";
import { URL } from "../contexts/Url";

const useSetting = create((set, get) => ({
  StoreName: "",
  BarcodePath: "",
  setBarcodePath: async (path) => {
    const { data } = await axios.post(`${URL}setting/set`, { path });
    console.log(data);
    set((state) => ({
      ...state,
      BarcodePath: data.BarcodeFilePath,
    }));
  },

  setStoreSetting: async () => {
    const { data } = await axios.get(`${URL}setting`);
    console.log(data);
    if (data.BarcodeFilePath) {
      set((state) => ({
        ...state,
        BarcodePath: data.BarcodeFilePath,
        StoreName: data.ShopName,
      }));
    }
  },
}));

export default useSetting;
