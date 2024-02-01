import React, { useEffect, useState } from "react";
import { ExportSearch, Header, ExportProductList } from "../components";
import useExportStore from "../store/ExportStore";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Export = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [confirmDelete, setConfirmDelete] = useState(true);

  const Navigate = useNavigate();
  const fetchStore = useExportStore((state) => state.fetchStore);
  const storeList = useExportStore((state) => state.storeList);
  const setSelect = useExportStore((state) => state.setSelect);
  const saveExport = useExportStore((state) => state.saveExport);
  const Success = useExportStore((state) => state.Success);
  const setSuccess = useExportStore((state) => state.setSuccess);
  const setEditID = useExportStore((state) => state.setEditID);
  const EditID = useExportStore((state) => state.EditID);
  const fetchEdit = useExportStore((state) => state.fetchEdit);
  const selectStore = useExportStore((state) => state.selectStore);
  const fetchProduct = useExportStore((state) => state.fetchProduct);
  const barcodes = useExportStore((state) => state.Barcode);
  const getID = useExportStore((state) => state.getID);
  const transferProduct = useExportStore((state) => state.transferProduct);

  useEffect(() => {
    setSuccess(false);
    fetchProduct();
  }, []);
  useEffect(() => {
    if (id) {
      setEditID(id);
    }
  }, [id]);
  useEffect(() => {
    if (
      (EditID !== "" && getID === false && barcodes.length > 0) ||
      (EditID !== "new" && getID === false && barcodes.length > 0)
    ) {
      fetchEdit(id);
    }
  }, [EditID, barcodes]);
  useEffect(() => {
    document.getElementById("from").value = selectStore;
    console.log(selectStore);
  }, [selectStore, storeList]);
  useEffect(() => {
    if (Success) {
      setSuccess(false);
      Navigate("/Export");
    }
  }, [Success]);
  useEffect(() => {
    fetchStore();
  }, [fetchStore]);

  return (
    // <div className="flex flex-col w-full h-full pb-10">
    //   <div className="p-5 select-none bg-third rounded-3xl">
    //     <Header title="ส่งสินค้า" />
    //     <div className="w-full">
    //       <div className="flex justify-between">
    //         <div>
    //           <label htmlFor="from">ส่งไปที่ :</label>
    //           <select
    //             id="from"
    //             name="from"
    //             className="p-2 ml-3 text-center rounded-md w-96"
    //             onChange={(e) => setSelect(e.target.value)}
    //           >
    //             <option value=""></option>
    //             {storeList.map((store) => (
    //               <option value={store.shopName}>{store.shopName}</option>
    //             ))}
    //           </select>
    //         </div>
    //         <div className="flex space-x-10">
    //           <button
    //             className="px-5 py-2 text-white rounded-lg hover:bg-light bg-highlight"
    //             onClick={() => saveExport()}
    //           >
    //             บันทึก
    //           </button>
    //           <button
    //             className="px-5 py-2 text-white rounded-lg hover:bg-light bg-highlight"
    //             onClick={() => transferProduct(id)}
    //           >
    //             ส่งสินค้า
    //           </button>
    //         </div>
    //       </div>

    //       <ExportSearch />
    //     </div>
    //   </div>
    //   <div className="h-full p-5 mt-5 overflow-y-scroll select-none bg-third rounded-3xl">
    //     <ExportProductList />
    //   </div>
    // </div>
  );
};

export default Export;
