import React from "react";

const Loading = () => {
  return (
    <div className="fixed w-screen h-screen  z-[10000] bg-black bg-opacity-25 backdrop-blur-lg">
      <div className="flex items-center justify-center w-full h-full">
        {" "}
        <span class="loader"></span>
      </div>
    </div>
  );
};

export default Loading;
