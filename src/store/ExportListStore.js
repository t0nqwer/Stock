import { create } from "zustand";
import axios from "axios";
import { URL } from "../contexts/Url";
import { notify } from "../contexts/Notification";

const useExportListStore = create((set, get) => ({
  list: [],
  fetchList: async () => {
    try {
      const { data } = await axios.get(`${URL}action/getexport`);
      set((state) => ({ ...state, list: data }));
    } catch (error) {
      notify(error.response.data.message);
    }
  },
  deleteExport: async (id) => {
    try {
      const { data } = await axios.post(`${URL}action/deleteaction`, { id });
      set((state) => ({ ...state, list: data }));
    } catch (error) {
      notify(error.response.data.message);
    }
  },
}));

export default useExportListStore;
