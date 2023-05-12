import { create } from "zustand";
import axios from "axios";

const URL = "http://localhost:8585/";
const usePrintBarcode = create((set, get) => ({
  Barcode: [],
  selectBarcode: [],
  search: "",
  setSearch: (search) => {
    set((state) => ({ ...state, search }));
  },
  setBarcode: (barcode) => {
    const state = get();

    const [selectdata] = state.Barcode.filter(
      (item) => item.barcode === barcode
    );
    const unselectdata = state.Barcode.filter(
      (item) => item.barcode !== barcode
    );
    const addqty = { ...selectdata, printqty: 0 };

    set((state) => ({
      ...state,
      Barcode: unselectdata,
    }));
    set((state) => ({
      ...state,
      selectBarcode: [...state.selectBarcode, addqty],
    }));
  },
  fetchProduct: async (search) => {
    const response = await axios.get(
      `${URL}listproducts?search=${search ? search : ""}`
    );
    set((state) => ({
      ...state,
      Barcode: response.data,
    }));
  },
  removeSelect: async (barcode) => {
    const state = get();
    const response = await axios.get(
      `${URL}listproducts?search=${state.search ? state.search : ""}`
    );
    const newselect = state.selectBarcode
      .filter((item) => item.barcode !== barcode)
      .map((item) => item.barcode);
    const data = response.data.filter(
      (item) => !newselect.includes(item.barcode)
    );
    console.log(newselect);
    set((state) => ({
      ...state,
      Barcode: data,
      selectBarcode: state.selectBarcode.filter(
        (item) => item.barcode !== barcode
      ),
    }));
  },
  changePrintQty: (barcodee, qty) => {
    const state = get();
    const newdata = state.selectBarcode.map((item) => {
      if (item.barcode == barcodee) {
        const addqty = { ...item, printqty: +qty };
        console.log(addqty);
        return addqty;
      }
      return item;
    });
    console.log(newdata);
    set((state) => ({
      ...state,
      selectBarcode: state.selectBarcode.map((item) => {
        if (item.barcode == barcodee) {
          const addqty = { ...item, printqty: +qty };
          console.log(addqty);
          return addqty;
        }
        return item;
      }),
    }));
  },
  printCheck: () => {
    const state = get();
    console.log(state.selectBarcode);
  },
}));

export default usePrintBarcode;
