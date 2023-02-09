import React from "react";

const Loader = () => {
  let circleCommonClasses = " h-4 w-4 bg-current   rounded-full";

  return (
    <div className="flex">
      <div className={`${circleCommonClasses} mr-2 animate-dance`}></div>
      <div className={`${circleCommonClasses} mr-2 animate-dance200`}></div>
      <div className={`${circleCommonClasses} animate-dance400`}></div>
    </div>
  );
};

export default Loader;
