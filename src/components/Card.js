import React from "react";

const Card = ({
  img,
  code,
  pictag1,
  pigtag2,
  Detail1,
  Info1,
  Detail2,
  Info2,
  Detail3,
  Info3,
}) => {
  return (
    <div className="bg-white border-transparent rounded-md relative dark:bg-darkmode-600 dark:border-transparent shadow-lg ">
      <div className="p-5">
        <div className=" h-96 2xl:h-96 relative rounded-md overflow-visible ">
          <img
            className="rounded-md absolute object-cover w-full h-full"
            src={img.replace("?", "_523x600?")}
          />
          <div className="absolute w-full bottom-0 text-white px-5 pb-4  z-10 bg-gradient-to-t from-zinc-700 to-transparent/0">
            <h1 href="" className="block font-medium pt-4 text-xl ">
              {code !== null ? `${code}${Info2}` : pictag1}
            </h1>
            <span className="text-white/90 text-sm mt-3">{pigtag2}</span>
          </div>
        </div>
        <div className="text-slate-600 dark:text-slate-500 mt-5">
          <div className="flex items-center">
            {Detail1}: {Info1}
          </div>
          <div className="flex items-center mt-2">
            {Detail2}: {Info2}
          </div>
          <div className="flex items-center mt-2">
            {Detail3}: {Info3}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
