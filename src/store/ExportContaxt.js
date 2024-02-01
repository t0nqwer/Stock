import { create } from "zustand";
import { URL } from "../contexts/Url";
import axios from "axios";
import { notify } from "../contexts/Notification";

const useExportContext = create((set, get) => ({
  loading: false,
  stores: [],
  products: [],
  searchresult: [],
  selectData: [],
  selectStore: "",
  res: "",
  selectDraft: [],
  setSelectStore: (store) => {
    set((state) => ({
      ...state,
      selectStore: store,
    }));
  },
  fetchProduct: async (barcode, name, code) => {
    console.log("fe");
    const { data } = await axios.get(
      `${URL}stock?isStock=${true}&price=&barcode=&name=&code=`
    );
    set((state) => ({
      ...state,
      products: data,
    }));
  },
  fetchStores: async () => {
    const { data } = await axios.get(`${URL}store`);

    set((state) => ({
      ...state,
      stores: data,
    }));
  },
  fetchExport: async (id) => {
    const state = get();
    await state.fetchProduct();
    const { data } = await axios.get(`${URL}stock/export/${id}`);

    set((state) => ({
      ...state,
      selectDraft: data.product,
      selectStore: data.to,
    }));
  },
  searchFunction: (search) => {
    const products = get().products;
    if (search.name === "" && search.barcode === "" && search.code === "")
      return set((state) => ({
        ...state,
        searchresult: [],
      }));

    if (search.name !== "") {
      const searchName = products.filter((product) =>
        product.name.includes(search.name)
      );
      set((state) => ({
        ...state,
        searchresult: searchName,
      }));
    }
    if (search.barcode !== "") {
      const searchBarcode = products.filter((product) =>
        product?._id.includes(search.barcode)
      );
      console.log(searchBarcode);
      set((state) => ({
        ...state,
        searchresult: searchBarcode,
      }));
    }
    if (search.code !== "") {
      const searchCode = products.filter((product) =>
        product?.design?.includes(search.code)
      );
      console.log(searchCode);
      set((state) => ({
        ...state,
        searchresult: searchCode,
      }));
    }
  },
  scanBarcode: (barcode) => {
    const addQty = get().addQty;
    console.log(barcode);
    const products = get().products;
    const selectData = get().selectData;
    if (selectData.some((product) => product?._id === barcode)) {
      return addQty(barcode);
    }
    const [searchBarcode] = products.filter(
      (product) => product?._id === barcode
    );
    if (!searchBarcode) return;
    const newSelect = { ...searchBarcode, qty: 1 };

    set((state) => ({
      ...state,
      selectData: [...state.selectData, newSelect],
    }));
  },
  setQty: (qty, id) => {
    console.log(qty);
    const selectData = get().selectData;
    const removeSelect = get().removeSelect;
    if (isNaN(qty)) {
      return notify("โปรดกรอกตัวเลข");
    }
    const products = get().products;
    const StockQty = products.find((product) => product._id === id).stock;
    if (qty > StockQty) return notify("สินค้าในสต๊อกไม่พอ");
    if (+qty <= 0 && qty !== "") return removeSelect(id);
    const newData = selectData.map((e) => {
      if (e._id === id) {
        return {
          ...e,
          qty: +qty,
        };
      }
      return e;
    });
    set((state) => ({ ...state, selectData: newData }));
  },
  addQty: (id) => {
    const selectData = get().selectData;
    const products = get().products;
    const StockQty = products.find((product) => product._id === id).stock;
    const oldqty = selectData.find((product) => product._id === id).qty;
    if (oldqty === StockQty) return notify("สินค้าในสต๊อกไม่พอ");
    const newData = selectData.map((e) => {
      if (e._id === id) {
        return {
          ...e,
          qty: e.qty + 1,
        };
      }
      return e;
    });
    set((state) => ({ ...state, selectData: newData }));
  },
  decreaseQty: (id) => {
    const selectData = get().selectData;
    const removeSelect = get().removeSelect;
    const [checkqty] = selectData.filter((t) => t._id === id);
    if (checkqty.qty === 1) return removeSelect(id);
    const newData = selectData.map((e) => {
      if (e._id === id) {
        return {
          ...e,
          qty: e.qty - 1,
        };
      }
      return e;
    });
    set((state) => ({ ...state, selectData: newData }));
  },
  removeSelect: (id) => {
    const selectData = get().selectData;
    const newSelect = selectData.filter((product) => product._id !== id);
    set((state) => ({
      ...state,
      selectData: newSelect,
    }));
  },
  saveExport: async (store, id) => {
    const selectData = get().selectData;
    if (!store) return notify("โปรดเลือกสาขาที่ต้องการส่งสินค้า");
    if (selectData.length === 0) return notify("โปรดเลือกสินค้า");

    const { data } = await axios.post(`${URL}stock/export/save`, {
      store,
      id,
      products: selectData,
    });
    notify(data.message);
    set((state) => ({
      ...state,
      selectData: [],
      res: "บันทึกสินค้าสำเร็จ",
    }));
  },
  SentExport: async (store, id) => {
    const selectData = get().selectData;
    if (!store) return notify("โปรดเลือกสาขาที่ต้องการส่งสินค้า");
    if (selectData.length === 0) return notify("โปรดเลือกสินค้า");
    set((state) => ({ ...state, loading: true }));
    try {
      const { data } = await axios.post(`${URL}stock/export`, {
        store,
        id,
        products: selectData,
      });
      notify(data.message);
      set((state) => ({
        ...state,
        selectData: [],
        res: " ส่งสินค้าสำเร็จ",
      }));
    } catch (err) {
      console.log(err);
      notify("ส่งสินค้าไม่สำเร็จ");
    }
  },
  reset: () => {
    console.log("reset");
    set((state) => ({
      loading: false,
      stores: [],
      products: [],
      searchresult: [],
      selectData: [],
      selectStore: "",
      res: "",
      selectDraft: [],
    }));
  },
}));

export default useExportContext;
