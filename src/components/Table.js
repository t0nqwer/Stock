import React, { useState } from "react";
import useTable from "../hook/useTable";
import Tablefooter from "./Tablefooter";
const Table = ({ data, rowsPerPage }) => {
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);
  return (
    <div className="mt-7 overflow-x-auto">
      <table className="w-full whitespace-nowrap">
        <thead>
          <tr>
            <th className="">Barcode</th>
            <th className="">รหัสสินค้า</th>
            <th className="">ชื่อสินค้า</th>
            <th className="">ไซซ์</th>
            <th className="">จำนวน</th>
            <th className="">ช่องเก็บ</th>
          </tr>
        </thead>
        <tbody>
          {slice.map((el) => (
            <tr key={el?.product_barcode}>
              <td className="px-3 text-center">{el?.product_barcode}</td>
              <td className="px-3 text-center">{el?.code}</td>
              <td className="px-3 whitespace-pre">{el?.title}</td>
              <td className="px-3 text-center">{el?.size}</td>
              <td className="px-3 text-center">{el?.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Tablefooter range={range} slice={slice} setPage={setPage} page={page} />
    </div>
  );
};

export default Table;
