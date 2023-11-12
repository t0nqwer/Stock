import { create } from "zustand";
import axios from "axios";
import { URL } from "../contexts/Url";
import { notify } from "../contexts/Notification";

// const URL = "http://localhost:8585/";
const useManufacture = create((set, get) => ({
  Barcode: [],
  selectBarcode: [],
  search: "",
  ConfirmManu: false,
  Loading: false,
  Success: false,
  setSearch: (search) => {
    set((state) => ({ ...state, search }));
  },
  setBarcode: (barcode, IsScan) => {
    const state = get();
    if (state.selectBarcode.some((item) => item._id === barcode)) {
      return state.addqty(barcode);
    }

    const [selectdata] = state.Barcode.filter(
      (item) => item._id.toUpperCase() === barcode.toUpperCase()
    );
    console.log(
      selectdata,
      state.Barcode[0]._id.toUpperCase(),
      barcode.toUpperCase()
    );
    if (!selectdata) return;
    const unselectdata = state.Barcode.filter(
      (item) => item.barcode !== barcode
    );

    const addqty = { ...selectdata, importqty: 1 };
    if (IsScan) {
      set((state) => ({
        ...state,
        search: "",
      }));
    }
    set((state) => ({
      ...state,
      selectBarcode: [...state.selectBarcode, addqty],
    }));
  },
  fetchProduct: async (barcode, name, code) => {
    const response = await axios.get(
      `${URL}stock?price=&barcode=${barcode}&name=${name}&code=${code}`
    );
    const state = get();

    // const product = response.data.filter(
    //   (n) => !state.selectBarcode.some((n2) => n.barcode == n2.barcode)
    // );
    set((state) => ({
      ...state,
      Barcode: response.data,
    }));
  },
  removeSelect: async (barcode) => {
    const state = get();

    const newselect = state.selectBarcode
      .filter((item) => item.barcode !== barcode)
      .map((item) => item.barcode);

    console.log(state.selectBarcode, barcode);
    set((state) => ({
      ...state,
      selectBarcode: state.selectBarcode.filter((item) => item._id !== barcode),
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
  addqty: (barcode) => {
    const state = get();
    const newdata = state.selectBarcode.map((item) => {
      if (item._id == barcode) {
        const addqty = { ...item, importqty: +item.importqty + 1 };
        return addqty;
      }
      return item;
    });
    set((state) => ({
      ...state,
      selectBarcode: newdata,
    }));
  },
  removeqty: (barcode) => {
    const state = get();
    const newdata = state.selectBarcode.map((item) => {
      if (item._id == barcode) {
        const addqty = { ...item, importqty: +item.importqty - 1 };
        return addqty;
      }
      return item;
    });
    const inputdata = newdata.filter((item) => item.importqty > 0);
    const removedata = newdata.filter((item) => item.importqty === 0);
    // if (removedata) {
    //   state.fetchProduct(state.search);
    // }
    set((state) => ({
      ...state,
      selectBarcode: inputdata,
    }));
  },
  removeAll: () => {
    set((state) => ({
      ...state,
      // Barcode: [],
      selectBarcode: [],
      ConfirmManu: false,
      Loading: false,
      Success: false,
    }));
  },
  addStock: async () => {
    set((state) => ({
      ...state,
      Loading: true,
    }));
    const state = get();
    try {
      const response = await axios.post(`${URL}stock`, state.selectBarcode);
      console.log(response.data);
      set((state) => ({
        ...state,
        Loading: false,
        Success: true,
      }));
    } catch (error) {
      notify("ไม่สามารถเพิ่มสินค้าได้", "error");
      set((state) => ({
        ...state,
        Loading: false,
      }));
    }
  },
  setConfirmManu: () => {
    const state = get();
    if (state.selectBarcode.length === 0) return notify("โปรดเลือกสินค้า");
    set((state) => ({
      ...state,
      ConfirmManu: !state.ConfirmManu,
    }));
  },
}));

export default useManufacture;
