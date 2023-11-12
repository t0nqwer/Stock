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

    const [selectdata] = state.Barcode.filter((item) => item._id === barcode);
    const unselectdata = state.Barcode.filter((item) => item._id !== barcode);
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
  fetchProduct: async (barcode, name, code) => {
    const response = await axios.get(
      `${URL}stock?price=&barcode=${barcode}&name=${name}&code=${code}`
    );
    set((state) => ({
      ...state,
      Barcode: response.data,
    }));
  },
  removeSelect: async (barcode) => {
    const state = get();
    const response = await axios.get(`${URL}stock?price=&barcode=&name=&code=`);
    const newselect = state.selectBarcode
      .filter((item) => item._id !== barcode)
      .map((item) => item._id);
    const data = response.data.filter((item) => !newselect.includes(item._id));

    set((state) => ({
      ...state,
      Barcode: data,
      selectBarcode: state.selectBarcode.filter((item) => item._id !== barcode),
    }));
  },
  changePrintQty: (barcodee, qty) => {
    const state = get();
    set((state) => ({
      ...state,
      selectBarcode: state.selectBarcode.map((item) => {
        if (item._id == barcodee) {
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
