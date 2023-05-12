import React, { useEffect } from "react";

const Tablefooter = ({ range, setPage, page, slice }) => {
  useEffect(() => {
    if (slice.length < 1 && page !== 1) {
      setPage(page - 1);
    }
  }, [slice, page, setPage]);
  return (
    <div className=" mx-4">
      {range.map((el, index) => (
        <button key={index} className="mx-4" onClick={() => setPage(el)}>
          {el}
        </button>
      ))}
    </div>
  );
};
export default Tablefooter;
