import { create } from "zustand";
import axios from "axios";
import { URL } from "../contexts/Url";
import { notify } from "../contexts/Notification";

const useExportListStore = create((set, get) => ({
  list: [],
  fetchList: async () => {
    try {
      const { data } = await axios.get(`${URL}stock/export`);
      data.sort(function (a, b) {
        return new Date(a.createAt) - new Date(b.createAt);
      });
      set((state) => ({ ...state, list: data }));
    } catch (error) {
      notify(error.response.data.message);
    }
  },
  deleteExport: async (id) => {
    try {
      const { data } = await axios.post(`${URL}stock/export/delete`, { id });
      set((state) => ({ ...state, list: data }));
    } catch (error) {
      notify(error.response.data.message);
    }
  },
}));

export default useExportListStore;
