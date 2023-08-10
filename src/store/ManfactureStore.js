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
    if (state.selectBarcode.some((item) => item.barcode === barcode)) {
      if (IsScan) {
        console.log("aa");
        set((state) => ({
          ...state,
          search: "",
        }));
      }
      return state.addqty(barcode);
    }

    const [selectdata] = state.Barcode.filter(
      (item) => item.barcode === barcode
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
  fetchProduct: async (search) => {
    const response = await axios.get(
      `${URL}listproducts?search=${search ? search : ""}`
    );
    const state = get();

    const product = response.data.filter(
      (n) => !state.selectBarcode.some((n2) => n.barcode == n2.barcode)
    );
    set((state) => ({
      ...state,
      Barcode: product,
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
  addqty: (barcode) => {
    const state = get();
    const newdata = state.selectBarcode.map((item) => {
      if (item.barcode == barcode) {
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
      if (item.barcode == barcode) {
        const addqty = { ...item, importqty: +item.importqty - 1 };
        return addqty;
      }
      return item;
    });
    const inputdata = newdata.filter((item) => item.importqty > 0);
    const removedata = newdata.filter((item) => item.importqty === 0);
    if (removedata) {
      state.fetchProduct(state.search);
    }
    set((state) => ({
      ...state,
      selectBarcode: inputdata,
    }));
  },
  removeAll: () => {
    set((state) => ({
      ...state,
      Barcode: [],
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
      const response = await axios.post(`${URL}stockin`, state.selectBarcode);
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
