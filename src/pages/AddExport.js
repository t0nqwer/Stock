import React, { useEffect, useState } from "react";
import { ExportSearch, Header, ExportProductList } from "../components";
import useExportContext from "../store/ExportContaxt";
import { useNavigate, useLocation } from "react-router-dom";

const AddExport = () => {
  const Navigate = useNavigate();
  const location = useLocation();
  const [confirmDelete, setConfirmDelete] = useState(true);
  const id = location.pathname.split("/")[2];
  const [search, setSearch] = useState({
    barcode: "",
    name: "",
    code: "",
  });
  const stores = useExportContext((state) => state.stores);
  const fetchStores = useExportContext((state) => state.fetchStores);
  const fetchProduct = useExportContext((state) => state.fetchProduct);
  const selectStore = useExportContext((state) => state.selectStore);
  const setSelectStore = useExportContext((state) => state.setSelectStore);
  const saveExport = useExportContext((state) => state.saveExport);
  const SentExport = useExportContext((state) => state.SentExport);
  const res = useExportContext((state) => state.res);
  const reset = useExportContext((state) => state.reset);
  const Loading = useExportContext((state) => state.loading);
  const fetchExport = useExportContext((state) => state.fetchExport);
  const selectDraft = useExportContext((state) => state.selectDraft);
  const products = useExportContext((state) => state.products);
  useEffect(() => {
    reset();
    fetchStores();
    fetchProduct();
  }, []);
  useEffect(() => {
    if (id !== "new") {
      fetchExport(id);
    }
    if (id === "new") {
      setSelectStore("");
      useExportContext.setState((state) => ({
        ...state,
        selectDraft: [],
        selectData: [],
      }));
    }
  }, [id]);
  useEffect(() => {
    if (res !== "") {
      reset();
      Navigate("/Export");
    }
  }, [res]);
  useEffect(() => {
    if (selectDraft.length > 0 && products.length > 0) {
      useExportContext.setState((state) => ({
        ...state,
        selectData: products
          .filter((product) =>
            selectDraft.some((item) => item.barcode === product._id)
          )
          .map((item) => ({
            ...item,
            qty: selectDraft.find((draft) => draft.barcode === item._id).qty,
          })),
      }));
    }
  }, [selectDraft, products]);
  return (
    <div className="flex flex-col w-full h-full pb-10">
      {Loading && (
        <div className="fixed z-50 flex items-center justify-center w-full h-full select-none backdrop-blur-sm">
          <div className="w-12 h-12 border-8 border-solid rounded-full animate-spin border-highlight border-t-transparent"></div>
        </div>
      )}

      <div className="p-3 rounded-lg select-none bg-third">
        <Header title="ส่งสินค้า" />
        <div className="w-full">
          <div className="flex justify-between">
            <div>
              <label htmlFor="from">ส่งไปที่ :</label>
              <select
                id="from"
                name="from"
                className="p-2 ml-3 text-center rounded-md w-96"
                onChange={(e) => setSelectStore(e.target.value)}
                value={selectStore}
              >
                <option value=""></option>
                {stores.map((store) => (
                  <option key={store._id} value={store.name}>
                    {store.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex space-x-10">
              <button
                className="px-5 py-2 text-white rounded-lg hover:bg-light bg-highlight"
                // onClick={() => saveExport(selectStore)}
              >
                พิมพ์
              </button>
              <button
                className="px-5 py-2 text-white rounded-lg hover:bg-light bg-highlight"
                onClick={() => saveExport(selectStore, id)}
              >
                บันทึก
              </button>
              <button
                className="px-5 py-2 text-white rounded-lg hover:bg-light bg-highlight"
                onClick={() => SentExport(selectStore, id)}
              >
                ส่งสินค้า
              </button>
            </div>
          </div>

          <ExportSearch />
        </div>
      </div>
      <div className="h-full p-5 mt-5 overflow-y-scroll select-none bg-third rounded-3xl">
        <ExportProductList />
      </div>
    </div>
  );
};

export default AddExport;
