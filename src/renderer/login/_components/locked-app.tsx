
import LockedIcon from "@components/icon/locked-icon";
import React from "react";

const LockedApp = () => {
  return (
    <div
      id="locked-app-icon"
      className="w-[250px] m-0 mr-12 relative flex flex-shrink-0 justify-center items-center"
    >
      <div className="before:content-[' '] w-16 bg-white h-full absolute border border-x border-x-gray-300"></div>
      <div className="before:content-[' '] w-[3px] bg-gray-300 h-full absolute border border-x border-x-grey"></div>
      <LockedIcon />
    </div>
  );
};

export default LockedApp;
