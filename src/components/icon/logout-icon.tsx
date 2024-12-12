import React from "react";
import type { IconProps } from "./type";

const LogoutIcon = ({ width, height, className = "" }: IconProps) => {
  return (
    <div className={className}>
      <svg
        fill="#000000"
        height={height}
        width={width}
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="-111.6 -111.6 533.20 533.20"
        xmlSpace="preserve"
        stroke="#000000"
        transform="rotate(0)"
      >
        <g
          id="SVGRepo_bgCarrier"
          strokeWidth="0"
          transform="translate(29.44999999999999,29.44999999999999), scale(0.81)"
        >
          <rect
            x="-111.6"
            y="-111.6"
            width="533.20"
            height="533.20"
            rx="266.6"
            fill="#4CAF50"
            strokeWidth="0"
          ></rect>
        </g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <g id="XMLID_15_">
            {" "}
            <path
              id="XMLID_16_"
              d="M221.742,46.906c-7.28-3.954-16.387-1.259-20.341,6.021c-3.955,7.279-1.259,16.386,6.02,20.341 C242.937,92.561,265,129.626,265,170c0,60.654-49.346,110-110,110S45,230.654,45,170c0-40.198,21.921-77.186,57.208-96.531 c7.265-3.982,9.925-13.1,5.943-20.364c-3.983-7.264-13.101-9.925-20.364-5.943C42.891,71.775,15,118.844,15,170 c0,77.196,62.804,140,140,140s140-62.804,140-140C295,118.62,266.929,71.453,221.742,46.906z"
            ></path>{" "}
            <path
              id="XMLID_17_"
              d="M155,130c8.284,0,15-6.716,15-15V15c0-8.284-6.716-15-15-15c-8.284,0-15,6.716-15,15v100 C140,123.284,146.716,130,155,130z"
            ></path>{" "}
          </g>{" "}
        </g>
      </svg>
    </div>
  );
};

export default LogoutIcon;