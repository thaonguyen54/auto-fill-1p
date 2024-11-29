import React from "react";
import type { IconProps } from "./type";

const BlueCirleIcon = ({ width, height, className }: IconProps) => {
  return (
    <div className={`${className}`}>
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
        <defs>
          <linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#0073E5" />
            <stop offset="100%" stopColor="#00B9F9" />
          </linearGradient>
        </defs>
        <path
          fill="url(#a)"
          fillRule="evenodd"
          d="M105 53A52 52 0 1 1 1 53a52 52 0 0 1 104 0z"
        />
      </svg>
    </div>
  );
};

export default BlueCirleIcon;
