import axios from "axios";
import { create } from "zustand";

const URL = "http://localhost:8585/";
const useProduct = create((set) => ({
  products: [],
  search: "",
  fetchProduct: async (search) => {
    const response = await axios.get(
      `${URL}listproducts?search=${search ? search : ""}`
    );
    set((state) => ({
      ...state,
      products: response.data,
    }));
  },
}));

export default useProduct;
