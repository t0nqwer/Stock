import React, { useEffect, useState } from "react";
import { Header } from "../components";
import usePrintBarcode from "../store/barcodeStore";
import Barcodelist from "../components/Barcode/Barcodelist";
import BarcodeSelect from "../components/Barcode/BarcodeSelect";
import useSetting from "../store/appSettingStore";
import { notify } from "../contexts/Notification";

const Barcode = () => {
  const barcodes = usePrintBarcode((state) => state.Barcode);
  const fetchProduct = usePrintBarcode((state) => state.fetchProduct);
  const selectBarcode = usePrintBarcode((state) => state.selectBarcode);
  const setSearch = usePrintBarcode((state) => state.setSearch);
  const search = usePrintBarcode((state) => state.search);
  const BarcodePath = useSetting((state) => state.BarcodePath);
  const [groupCode, setGroupCode] = useState([]);
  const [groupFabric, setGroupFabric] = useState([]);
  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);
  useEffect(() => {
    fetchProduct(search);
  }, [search]);
  useEffect(() => {
    const groupByCategory = barcodes.reduce((group, product) => {
      const { code } = product;
      group[code] = group[code] ?? [];
      group[code].push(product);
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
    console.log(selectBarcode);
  }, [selectBarcode]);
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
        if (e.cloth)
          myWindow.document.write(`<div class="page">
          <div style="display: flex; justify-content: space-between; ">
          <div >${e.code.toUpperCase()}-${e.size}</div>
          <div>${e.price}</div>
          </div>
          <div style="font-size: 8pt;   ">${e.fabric}</div>
          <img id="${e.barcode}${i}" xmlns="http://www.w3.org/2000/svg"
          style="object-fit: contain;"  width="100%"></img>
          <div style="font-size: 8pt; display: flex; justify-content: center;"><div>${e.barcode.toUpperCase()}</div></div>
          </div>`);
        if (!e.cloth)
          myWindow.document.write(`<div class="page">
        <div style="display: flex; justify-content: space-between; line-height: 1em;   font-size: 9pt;">
        <div >${e.name}</div>
        <div>${e.price}</div>
        </div>
        <div style="font-size: 8pt;   ">${e.brand}</div>
        <img id="${e.barcode}${i}" xmlns="http://www.w3.org/2000/svg"
        style="object-fit: contain;"  width="100%"></img>
        <div style="font-size: 8pt; display: flex; justify-content: center;"><div>${e.barcode.toUpperCase()}</div></div>
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
          `JsBarcode("#${e.barcode}${i}", "${e.barcode}",{
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

  return (
    <div className="flex flex-col w-full h-full p-5 bg-third rounded-3xl">
      <Header title="ปริ้นบาร์โค้ด" />
      <div className="flex h-full gap-3 overflow-hidden">
        <div className="w-1/2">
          <div className="flex justify-between w-full px-5 py-3 mb-1 font-semibold rounded-xl ">
            <p>รายการสินค้า</p>
            <input
              className="p-2 border-transparent rounded-md outline-none bg-light text-dark placeholder-primary focus:border-transparent focus:ring-0"
              placeholder="ค้นหา"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
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
