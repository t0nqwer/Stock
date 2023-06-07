import React from "react";
import {
  TbBuildingWarehouse,
  TbPackageImport,
  TbPackageExport,
} from "react-icons/tb";
import { GiSewingMachine } from "react-icons/gi";
import { CiBarcode, CiSettings } from "react-icons/ci";
export const links = [
  {
    title: "สต๊อคสินค้า",
    name: "Stock",
    icon: <TbBuildingWarehouse />,
  },
  {
    title: "สินค้าผลิต",
    name: "NewProduct",
    icon: <GiSewingMachine />,
  },
  {
    title: "นำสินค้าเข้า",
    name: "Import",
    icon: <TbPackageImport />,
  },
  {
    title: "ส่งสินค้าออก",
    name: "Export",
    icon: <TbPackageExport />,
  },
  {
    title: "ปริ้นบาร์โค้ด",
    name: "Barcode",
    icon: <CiBarcode />,
  },
  {
    title: "ตั้งค่า",
    name: "Setting",
    icon: <CiSettings />,
  },
];
