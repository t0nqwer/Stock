import React, { useEffect, useState } from "react";
import { Header } from "../components";
import usePrintBarcode from "../store/barcodeStore";
import Barcodelist from "../components/Barcode/Barcodelist";
import BarcodeSelect from "../components/Barcode/BarcodeSelect";
import useSetting from "../store/appSettingStore";
import { notify } from "../contexts/Notification";

const Barcode = () => {
  const [search, setSearch] = useState({ name: "", code: "", barcode: "" });
  const [searchInput, setSearchInput] = useState("");
  const setBarcode = usePrintBarcode((state) => state.setBarcode);
  const barcodes = usePrintBarcode((state) => state.Barcode);
  const fetchProduct = usePrintBarcode((state) => state.fetchProduct);
  const selectBarcode = usePrintBarcode((state) => state.selectBarcode);
  const BarcodePath = useSetting((state) => state.BarcodePath);
  const [groupCode, setGroupCode] = useState([]);
  const [groupFabric, setGroupFabric] = useState([]);
  useEffect(() => {
    fetchProduct(search.barcode, search.name, search.code);
  }, [fetchProduct, search]);

  useEffect(() => {
    const groupByCategory = barcodes.reduce((group, product) => {
      const { design } = product;
      group[design] = group[design] ?? [];
      group[design].push(product);
      return group;
    }, {});
    const arr = Object.values(groupByCategory);
    const groupByFabric = arr.map((item) => {
      const data = item.reduce((group, product) => {
        const { fabric } = product;
        group[fabric] = group[fabric] ?? [];
        group[fabric].push(product);
        return group;
      }, {});

      return Object.values(data);
    });
    setGroupCode(arr);
    setGroupFabric(groupByFabric);
  }, [barcodes]);

  useEffect(() => {
    const timmer = setInterval(() => {
      setSearch({ ...search, barcode: searchInput });
    }, 500);
    if (searchInput === search.barcode) {
      clearInterval(timmer);
    }
    return () => {
      clearInterval(timmer);
    };
  }, [searchInput, search.barcode]);
  const prindhandle = () => {
    if (selectBarcode.length === 0) return notify("โปรดเลือกสินค้า");
    if (selectBarcode.filter((item) => item.printqty === 0).length !== 0)
      return notify("โปรดกรอกจำนวนสินค้า");
    if (!BarcodePath) return notify("โปรดเลือกไฟล์สร้างบาร์โค้ด");
    const myWindow = window.open("", "");
    myWindow.document.write("<html><head><title>Print it!</title><style>");
    myWindow.document.write(` 
    @page {
      size: 36mm 29mm;
      margin: 0;

    }
    * {
      box-sizing: border-box;
    }
    body {
      margin: 0;
      padding: 0;
      background: rgb(204, 204, 204);
      display: flex;
      flex-direction: column;
    }

    .page {
      display: inline-block;
      position: relative;
      height: 29mm;
      width: 36mm;
      font-size: 10pt;
      margin: 2em auto;
      padding: calc(var(--bleeding) + var(--margin));
      box-shadow: 0 0 0.5cm rgba(0, 0, 0, 0.5);
      background: white;
    }

    @media screen {
      .page::after {
        position: absolute;
        content: "";
        width: calc(100% - var(--bleeding) * 2);
        height: calc(100% - var(--bleeding) * 2);
        margin: var(--bleeding);
        top: 0;
        left: 0;
        pointer-events: none;
        z-index: 9999;
      }
    }
    @media print {
      .page {
        margin: 0;
        overflow: hidden;
      }
    {    
    .no-print {
        display: none !important;
    }

    }`);
    myWindow.document.write("</style></head>");
    myWindow.document.write(
      ` <body><div class="page no-print" onafterprint="self.close()"><button onclick="window.print()">ปริ้น</button></div>`
    );

    selectBarcode.map((e) => {
      const print = e.printqty;
      let i;
      for (i = 0; i < print; i++) {
        if (e.design)
          myWindow.document.write(`<div class="page">
          <div style="display: flex; justify-content: space-between; ">
          <div >${e.design.toUpperCase()}-${e.size}</div>
          <div>${e.price}</div>
          </div>
          <div style="font-size: 8pt;   ">${e.fabric}</div>
          <img id="${e._id}${i}" xmlns="http://www.w3.org/2000/svg"
          style="object-fit: contain;"  width="100%"></img>
          <div style="font-size: 8pt; display: flex; justify-content: center;"><div>${e._id.toUpperCase()}</div></div>
          </div>`);
        if (!e.design)
          myWindow.document.write(`<div class="page">
        <div style="display: flex; justify-content: space-between; line-height: 1em;   font-size: 9pt;">
        <div >${e.name}</div>
        <div>${e.price}</div>
        </div>
        <div style="font-size: 8pt;   ">${e.brand}</div>
        <img id="${e._id}${i}" xmlns="http://www.w3.org/2000/svg"
        style="object-fit: contain;"  width="100%"></img>
        <div style="font-size: 8pt; display: flex; justify-content: center;"><div>${e._id.toUpperCase()}</div></div>
        </div>`);
      }
    });
    myWindow.document.write(`<script src="${BarcodePath}"></script>`);

    myWindow.document.write(`<script type="text/javascript">`);
    selectBarcode.map((e) => {
      const print = e.printqty;
      let i;
      for (i = 0; i < print; i++) {
        myWindow.document.write(
          `JsBarcode("#${e._id}${i}", "${e._id}",{
            format: "code128",
            width: 1,
            height: 35,
            displayValue: false,
            margin: 2,
            marginTop: 0,
            marginBottom: 0,
            marginLeft: 10,
            marginRight: 10,
            background: "#ffffff",
          });`
        );
      }
    });
    myWindow.document.write(`</script></body></html>`);
  };
  const nameHandler = (e) => {
    if (e.target.value === "") {
      setSearch((state) => ({
        ...state,
        name: "",
      }));
    }
    setSearch((state) => ({
      ...state,
      name: e.target.value,
    }));
  };
  const codeHandler = (e) => {
    if (e.target.value === "") {
      setSearch((state) => ({
        ...state,
        code: "",
      }));
    }
    setSearch((state) => ({
      ...state,
      code: e.target.value,
    }));
  };

  return (
    <div className="flex flex-col w-full h-full p-5 bg-third rounded-3xl">
      <Header title="ปริ้นบาร์โค้ด" />
      <div className="flex h-full gap-3 overflow-hidden">
        <div className="w-1/2">
          <div className="flex items-end justify-around mb-1 space-x-2">
            <div className="select-none">
              <p className="text-center text-dark">ค้นหาชื่อ</p>
              <input
                className="w-40 px-4 py-2 font-semibold border-transparent rounded-md outline-none bg-light text-dark placeholder-highlight focus:border-transparent focus:ring-0"
                placeholder="ชื่อสินค้า"
                type="text"
                onChange={nameHandler}
                value={search.name}
              />
            </div>
            <div className="select-none">
              <p className="text-center text-dark">ค้นหารหัสเสื้อผ้า</p>
              <input
                className="w-40 px-4 py-2 font-semibold border-transparent rounded-md outline-none bg-light text-dark placeholder-highlight focus:border-transparent focus:ring-0"
                placeholder="รหัสเสื้อผ้า"
                type="text"
                onChange={codeHandler}
                value={search.code}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <div>
              <p className="text-center text-dark">
                ค้นหาบาร์โค้ด/สแกนบาร์โค้ด
              </p>
              <input
                className="px-4 py-2 mx-auto font-semibold border-transparent rounded-md outline-none bg-light text-dark placeholder-highlight focus:border-transparent focus:ring-0"
                placeholder="Barcode"
                onChange={(e) => {
                  setSearchInput(e.target.value);
                }}
                value={searchInput}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    setBarcode(searchInput, true);
                    setSearchInput("");
                  }
                }}
              />
            </div>
          </div>
          <Barcodelist groupCode={groupCode} groupFabric={groupFabric} />
        </div>
        <div className="w-1/2">
          <div className="flex items-center justify-end w-full">
            <button
              onClick={prindhandle}
              className="px-5 py-3 mb-1 text-white rounded-lg bg-highlight hover:bg-light"
            >
              พิมพ์
            </button>
          </div>
          <BarcodeSelect />
        </div>
      </div>
    </div>
  );
};

export default Barcode;
