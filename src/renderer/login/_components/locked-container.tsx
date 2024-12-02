import React from "react";
import LockedApp from "./locked-app";
import LockedContent from "./locked-content";

const LockedContainer = () => {
  return (
    <div className="w-full flex max-w-[70%] justify-center">
      <LockedApp />
      <LockedContent/>
    </div>
  );
};

export default LockedContainer;
