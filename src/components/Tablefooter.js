import React, { useEffect } from "react";

const Tablefooter = ({ range, setPage, page, slice }) => {
  useEffect(() => {
    if (slice.length < 1 && page !== 1) {
      setPage(page - 1);
    }
  }, [slice, page, setPage]);
  return (
    <div className={``}>
      {range.map((el, index) => (
        <button key={index} className={``} onClick={() => setPage(el)}>
          {el}
        </button>
      ))}
    </div>
  );
};
export default Tablefooter;
