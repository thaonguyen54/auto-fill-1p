import React from "react";
import BlueCirleIcon from "./blue-circle-icon";
import FaceplateIcon from "./faceplate-icon";

const LockedIcon = () => {
  return (
    <div className="top-[24vh] absolute w-[126px] h-[126px] m-auto left-0 right-0 z-10">
      <BlueCirleIcon
        width="112"
        height="112"
        className="top-2 left-2 absolute"
      />
      <FaceplateIcon width="128" height="128" className="absolute" />
      <img
        className="top-10 left-14 w-4 h-12 relative overflow-clip"
        src="https://app.1password.com/images/1password-keyhole.png"
      ></img>
    </div>
  );
};

export default LockedIcon;
