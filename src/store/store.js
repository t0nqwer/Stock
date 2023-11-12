import axios from "axios";
import { create } from "zustand";

const URL = "http://localhost:8585/";
const useProduct = create((set) => ({
  products: [],
  pagelimit: 0,
  search: "",
  fetchProduct: async (barcode, price, name, code, isStock) => {
    const { data } = await axios.get(
      `${URL}stock?isStock=${isStock}&barcode=${barcode}&price=${price}&name=${name}&code=${code}`
    );
    console.log(data);
    set((state) => ({
      ...state,
      products: data,
    }));
  },
}));

export default useProduct;
