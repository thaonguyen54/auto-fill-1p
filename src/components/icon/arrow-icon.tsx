import React from "react";
import type { IconProps } from "./type";

const ArrowIcon = ({ width, height, className = "" }: IconProps) => {
  return (
    <div className={className}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 16 14"
        className="right-arrow"
        fill="#8FA1B3"
        fillRule="nonzero"
      >
        <path d="M12.586 8H1a1 1 0 1 1 0-2h11.586L8.293 1.707A1 1 0 0 1 9.707.293l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L12.586 8z"></path>
      </svg>
    </div>
  );
};

export default ArrowIcon;
