import React from "react";
import { Header } from "../components";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
  Search,
  Toolbar,
} from "@syncfusion/ej2-react-grids";
import { useDataContext } from "../contexts/DataContext";
export const contextMenuItems = [
  "AutoFit",
  "AutoFitAll",
  "SortAscending",
  "SortDescending",
  "Copy",
  "Edit",
  "Delete",
  "Save",
  "Cancel",
  "PdfExport",
  "ExcelExport",
  "CsvExport",
  "FirstPage",
  "PrevPage",
  "LastPage",
  "NextPage",
];
const Stock = () => {
  const { ProductData, setProductData } = useDataContext();

  const ordersGrid = [
    {
      field: "product_barcode",
      headerText: "Barcode",
      width: "130",
      editType: "dropdownedit",
      textAlign: "Center",
    },
    {
      field: "code",
      headerText: "รหัสสินค้า",
      width: "100",
      textAlign: "Center",
    },
    {
      field: "title",
      headerText: "ชื่อสินค้า",
      width: "400",
      textAlign: "Left",
    },
    {
      field: "size",
      headerText: "ไซซ์",
      width: "80",
      textAlign: "Center",
    },
    {
      field: "price",
      headerText: "จำนวน",
      width: "120",
      textAlign: "Center",
    },
    {
      field: "price",
      headerText: "ช่องเก็บ",
      width: "120",
      textAlign: "Center",
    },
  ];

  const toolbarOptions = ["Search"];
  const editing = { allowDeleting: true, allowEditing: true };
  const created = () => {
    const collection = document.getElementsByClassName("e-input e-search");
    console.log(collection);
    collection[0].placeholder = "ค้นหาสินค้า";
  };
  return (
    <div className="m-2 md:m-10 mt-24 p-5  bg-white rounded-3xl">
      <Header category="สินค้า" title="สต๊อคสินค้า" />
      <GridComponent
        dataSource={ProductData}
        allowPaging={true}
        allowSorting={true}
        pageSettings={{ pageCount: 10, pageSize: 15 }}
        editSettings={editing}
        toolbar={toolbarOptions}
        contextMenuItems={contextMenuItems}
        height="auto"
        className=" text-lg"
        created={created}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[Search, ContextMenu, Page, Toolbar, Edit, Sort, Resize]}
        />
      </GridComponent>
    </div>
  );
};

export default Stock;
