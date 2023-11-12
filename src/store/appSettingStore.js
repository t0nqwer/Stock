import { create } from "zustand";
import axios from "axios";
import { URL } from "../contexts/Url";

const useSetting = create((set, get) => ({
  StoreName: "",
  BarcodePath: "",
  setBarcodePath: async (path) => {
    const { data } = await axios.post(`${URL}setting`, { path });
    console.log(data);
    set((state) => ({
      ...state,
      BarcodePath: data.barcodeLocation,
    }));
  },

  setStoreSetting: async () => {
    const { data } = await axios.get(`${URL}setting`);
    console.log(data);
    if (data.barcodeLocation) {
      set((state) => ({
        ...state,
        BarcodePath: data.barcodeLocation,
        StoreName: data.warehouseName,
      }));
    }
  },
}));

export default useSetting;
