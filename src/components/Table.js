import React, { useState } from "react";

const Table = ({ data, groupCode }) => {
  console.log(data);

  return (
    <div className="h-full overflow-scroll scrollbar-hide rounded-lg">
      {data.map((e, i) => {
        if (e.flat()[0].cloth)
          return (
            <div
              key={e[0].flat()[0].code}
              className="w-full px-5 text-lg font-semibold py-3 bg-third border  rounded-xl mb-1 "
            >
              <div>
                {e[0].flat()[0].code.toUpperCase()}/
                <span className=" text-base font-normal">
                  {e[0].flat()[0].name}
                </span>
              </div>
              <div className="w-full">
                {e.map((a) => (
                  <div
                    key={`${e[0].flat()[0].code}${a[0].fabric}`}
                    className="px-5 w-full"
                  >
                    <div className="flex justify-between  mt-1  border-b-1">
                      <p>
                        {a[0].fabric} - {a[0].price} ฿
                      </p>
                      <p></p>
                      <p>
                        {a
                          .map((d) => d.stock[0]?.qty)
                          .reduce((partialSum, a) => partialSum + a, 0)}
                      </p>
                    </div>
                    <div className="w-full">
                      {a.map((b) => (
                        <div
                          key={b.barcode}
                          className="flex w-full justify-between pl-3 text-base border-t-1 border-gray-300 font-normal"
                        >
                          <p>{b.barcode}</p>
                          <p>{b.size}</p>
                          <p>{b.stock[0]?.qty}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
      })}
      {data.map((e, i) => {
        if (!e.flat()[0].cloth)
          return e.flat().map((a) => (
            <div
              key={a.barcode}
              className="w-full px-5  text-lg font-normal py-2 bg-third border  rounded-xl mb-1 "
            >
              <div className="flex justify-between">
                <div className=" w-1/6 font-semibold">{a.barcode}</div>
                <div className="w-3/6 font-normal">{a.name}</div>
                <div className="w-1/6 text-center">{a.price}</div>
                <div className="w-1/6 text-right pr-5">{a.stock[0]?.qty}</div>
              </div>
            </div>
          ));
      })}
    </div>
  );
};

export default Table;
