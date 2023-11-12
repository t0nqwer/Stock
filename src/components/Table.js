import React, { useState } from "react";

const Table = ({ data, groupCode }) => {
  return (
    <div className="h-full overflow-scroll rounded-lg scrollbar-hide">
      {data.map((e, i) => {
        if (e.flat()[0].design)
          return (
            <div
              key={e[0].flat()[0].design}
              className="w-full px-5 py-3 mb-1 text-lg font-semibold border bg-third rounded-xl "
            >
              <div>
                {e[0].flat()[0].design.toUpperCase()}/
                <span className="text-base font-normal ">
                  {e[0].flat()[0].name}
                </span>
              </div>
              <div className="w-full">
                {e.map((a) => (
                  <div
                    key={`${e[0].flat()[0].design}${a[0].fabric}`}
                    className="w-full px-5"
                  >
                    <div className="flex justify-between mt-1 border-b-1">
                      <p>
                        {a[0].fabric} - {a[0].price} ฿
                      </p>
                      <p></p>
                      <p>
                        {a
                          .map((d) => d.stock)
                          .reduce((partialSum, a) => partialSum + a, 0)}
                      </p>
                    </div>
                    <div className="w-full">
                      {a.map((b) => (
                        <div
                          key={b._id}
                          className="flex justify-between w-full pl-3 text-base font-normal border-gray-300 border-t-1"
                        >
                          <p>{b._id}</p>
                          <p>{b.size}</p>
                          <p>{b.stock}</p>
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
        if (!e.flat()[0].design)
          return e.flat().map((a) => (
            <div
              key={a._id}
              className="w-full px-5 py-2 mb-1 text-lg font-normal border bg-third rounded-xl "
            >
              <div className="flex justify-between">
                <div className="w-1/6 font-semibold ">{a._id}</div>
                <div className="w-3/6 font-normal">{a.name}</div>
                <div className="w-1/6 text-center">{a.price}</div>
                <div className="w-1/6 pr-5 text-right">{a.stock}</div>
              </div>
            </div>
          ));
      })}
    </div>
  );
};

export default Table;
