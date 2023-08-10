import { create } from "zustand";
import axios from "axios";
import { URL } from "../contexts/Url";
import { notify } from "../contexts/Notification";

const useExportStore = create((set, get) => ({
  Barcode: [],
  selectBarcode: [],
  search: "",
  Loading: false,
  Success: false,
  storeList: [],
  selectStore: "",
  EditID: "",
  getID: false,
  setEditID: (id) => {
    set((state) => ({ ...state, EditID: id }));
  },
  fetchEdit: async (id) => {
    const state = get();
    const { data } = await axios.get(`${URL}action/getexport/${id}`);
    console.log(data, state.Barcode);
    data[0].actionDetail.map((item) => {
      state.setBarcode(item.barcode, true);
      state.changeqty(item.barcode, item.amout);
    });
    set((state) => ({ ...state, selectStore: data[0].shopName, getID: true }));
  },

  fetchStore: async () => {
    const { data } = await axios.get(`${URL}liststores`);
    set((state) => ({
      ...state,
      storeList: data,
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
  setSearch: (search) => {
    set((state) => ({ ...state, search }));
  },
  setBarcode: (barcode, IsScan) => {
    const state = get();
    if (state.selectBarcode.some((item) => item.barcode === barcode)) {
      if (IsScan) {
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
      search: "",
    }));
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
  changeqty: (barcode, qty) => {
    const state = get();
    if (qty === 0) return state.removeSelect(barcode);
    const newdata = state.selectBarcode.map((item) => {
      if (item.barcode == barcode) {
        const addqty = { ...item, importqty: qty };
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
    set((state) => ({
      ...state,
      Barcode: data,
      selectBarcode: state.selectBarcode.filter(
        (item) => item.barcode !== barcode
      ),
    }));
  },
  setSelect: (value) => {
    set((state) => ({ ...state, selectStore: value }));
  },
  setSuccess: (value) => {
    set((state) => ({ ...state, Success: value }));
  },
  saveExport: async (barcode) => {
    try {
      const state = get();
      if (state.selectStore === "") return notify("โปรดเลือกร้าน");
      if (state.selectBarcode.length === 0) return notify("โปรดเลือกสินค้า");
      if (state.EditID === "new") {
        console.log("new");
        const { data } = await axios.post(`${URL}action/saveexport`, {
          store: state.selectStore,
          product: state.selectBarcode.map((item) => ({
            barcode: item.barcode,
            importqty: item.importqty,
          })),
        });
        set((state) => ({
          ...state,
          Barcode: [],
          selectBarcode: [],
          search: "",
          Loading: false,
          Success: true,
          storeList: [],
          selectStore: "",
          EditID: "",
          getID: false,
        }));
      } else {
        console.log("old");
        const { data } = await axios.post(`${URL}action/updateaction`, {
          id: state.EditID,
          product: state.selectBarcode.map((item) => ({
            barcode: item.barcode,
            importqty: item.importqty,
          })),
        });
        set((state) => ({
          ...state,
          Barcode: [],
          selectBarcode: [],
          search: "",
          Loading: false,
          Success: true,
          storeList: [],
          selectStore: "",
          EditID: "",
          getID: false,
        }));
      }
    } catch (error) {
      notify(error.response.data.message);
    }
  },
}));

export default useExportStore;
