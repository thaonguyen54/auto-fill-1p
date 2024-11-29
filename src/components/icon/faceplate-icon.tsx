import React from "react";
import type { IconProps } from "./type";

const FaceplateIcon = ({ width, height, className }: IconProps) => {
  return (
    <div className={`${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 256 256"
        width={width}
        height={height}
      >
        {" "}
        <defs>
          {" "}
          <filter id="j" x="-3.2%" y="-2.3%" width="256px" height="106.5%">
            {" "}
            <feMorphology
              in="SourceAlpha"
              operator="dilate"
              radius="1.5"
              result="shadowSpreadOuter1"
            />{" "}
            <feOffset
              dy="2"
              in="shadowSpreadOuter1"
              result="shadowOffsetOuter1"
            />{" "}
            <feGaussianBlur
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
              stdDeviation="1.5"
            />{" "}
            <feComposite
              in="shadowBlurOuter1"
              in2="SourceAlpha"
              operator="out"
              result="shadowBlurOuter1"
            />{" "}
            <feColorMatrix
              in="shadowBlurOuter1"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
            />{" "}
          </filter>{" "}
          <filter id="g" x="-21.5%" y="-21.5%" width="143%" height="143%">
            {" "}
            <feGaussianBlur
              in="SourceAlpha"
              result="shadowBlurInner1"
              stdDeviation="6"
            />{" "}
            <feOffset
              dy="12"
              in="shadowBlurInner1"
              result="shadowOffsetInner1"
            />{" "}
            <feComposite
              in="shadowOffsetInner1"
              in2="SourceAlpha"
              k2="-1"
              k3="1"
              operator="arithmetic"
              result="shadowInnerInner1"
            />{" "}
            <feColorMatrix
              in="shadowInnerInner1"
              result="shadowMatrixInner1"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"
            />{" "}
            <feMorphology
              in="SourceAlpha"
              radius="1.5"
              result="shadowSpreadInner2"
            />{" "}
            <feOffset
              dy="1.5"
              in="shadowSpreadInner2"
              result="shadowOffsetInner2"
            />{" "}
            <feComposite
              in="shadowOffsetInner2"
              in2="SourceAlpha"
              k2="-1"
              k3="1"
              operator="arithmetic"
              result="shadowInnerInner2"
            />{" "}
            <feColorMatrix
              in="shadowInnerInner2"
              result="shadowMatrixInner2"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"
            />{" "}
            <feMerge>
              {" "}
              <feMergeNode in="shadowMatrixInner1" />{" "}
              <feMergeNode in="shadowMatrixInner2" />{" "}
            </feMerge>{" "}
          </filter>{" "}
          <path
            id="i"
            d="M108.07 0c59.69 0 108.07 48.39 108.07 108.07 0 59.69-48.38 108.07-108.07 108.07C48.4 216.14 0 167.76 0 108.07 0 48.4 48.39 0 108.07 0zm0 19.45a88.62 88.62 0 100 177.24 88.62 88.62 0 000-177.24z"
          />{" "}
          <path
            id="f"
            d="M108.07 76.65a31.43 31.43 0 110 62.85 31.43 31.43 0 010-62.85z"
          />{" "}
          <linearGradient id="h" x1="50%" x2="50%" y2="100%">
            {" "}
            <stop stopOpacity=".25" offset="0" />{" "}
            <stop stopOpacity=".15" offset="1" />{" "}
          </linearGradient>{" "}
        </defs>{" "}
        <g fill="none" fillRule="evenodd">
          {" "}
          <path
            d="M128 8.41c33.02 0 62.92 13.39 84.56 35.03A119.21 119.21 0 01247.59 128c0 33.02-13.39 62.92-35.03 84.56A119.21 119.21 0 01128 247.59a119.21 119.21 0 01-84.56-35.03A119.21 119.21 0 018.41 128c0-33.02 13.39-62.92 35.03-84.56A119.21 119.21 0 01128 8.41zm.76 23.04a95.5 95.5 0 00-67.74 28.06 95.5 95.5 0 00-28.06 67.73 95.5 95.5 0 0028.06 67.74 95.5 95.5 0 0067.74 28.06 95.5 95.5 0 0067.73-28.06 95.5 95.5 0 0028.06-67.74 95.5 95.5 0 00-28.06-67.73 95.5 95.5 0 00-67.73-28.06z"
            fill="#B1B1B1"
            stroke="#000"
            strokeOpacity=".3"
            strokeWidth="1.5"
          />{" "}
          <g transform="translate(19.93 19.93)">
            {" "}
            <use fill="#000" filter="url(#j)" xlinkHref="#i" />{" "}
            <path
              d="M108.07-.75c30.05 0 57.26 12.18 76.95 31.87a108.48 108.48 0 0131.87 76.95c0 30.05-12.18 57.26-31.87 76.95a108.48 108.48 0 01-76.95 31.87 108.48 108.48 0 01-76.95-31.87A108.48 108.48 0 01-.75 108.07c0-30.05 12.18-57.25 31.87-76.95A108.48 108.48 0 01108.07-.75zm0 20.95a87.6 87.6 0 00-62.13 25.74 87.6 87.6 0 00-25.74 62.13 87.6 87.6 0 0025.74 62.13 87.6 87.6 0 0062.13 25.74 87.6 87.6 0 0062.13-25.74 87.6 87.6 0 0025.74-62.13 87.6 87.6 0 00-25.74-62.13 87.6 87.6 0 00-62.13-25.74z"
              fill="#FFF"
              stroke="#000"
              strokeOpacity=".25"
              strokeWidth="1.5"
            />{" "}
          </g>{" "}
          <path
            d="m21.82 119.78c0 58.96 47.54 106.76 106.18 106.76s106.18-47.8 106.18-106.76c0-7.98-0.87-15.75-2.52-23.22a109.3 109.3 0 0 1 4.41 30.84c0 60.02-48.38 108.67-108.07 108.67s-108.07-48.65-108.07-108.67c0-10.72 1.54-21.07 4.42-30.86a107.57 107.57 0 0 0-2.53 23.24z"
            fill="#000"
            fillOpacity=".05"
          />{" "}
          <path
            d="M128 32.2c52.07 0 94.28 42 94.28 93.8a93.23 93.23 0 01-25.43 64.09 89.44 89.44 0 0021.65-58.46c0-49.74-40.52-90.06-90.5-90.06S37.5 81.9 37.5 131.63a89.44 89.44 0 0021.65 58.46A93.24 93.24 0 0133.72 126c0-51.8 42.21-93.8 94.28-93.8z"
            fill="#000"
            fillOpacity=".07"
          />{" "}
          <path
            transform="translate(19.93 19.93)"
            d="M108.07 42.22a65.64 65.64 0 0146.57 19.29 65.64 65.64 0 0119.28 46.56 65.64 65.64 0 01-19.28 46.57 65.64 65.64 0 01-46.57 19.28 65.64 65.64 0 01-46.56-19.28 65.64 65.64 0 01-19.29-46.57 65.64 65.64 0 0119.29-46.56 65.64 65.64 0 0146.56-19.29z"
            fill="#F2F2F2"
            stroke="url(#h)"
            strokeWidth="1.4"
          />{" "}
          <g transform="translate(19.93 19.93)">
            {" "}
            <use fill="#000" fillOpacity=".03" xlinkHref="#f" />{" "}
            <use fill="#000" filter="url(#g)" xlinkHref="#f" />{" "}
            <path
              d="M108.07 75.9c8.89 0 16.93 3.6 22.75 9.42a32.07 32.07 0 019.43 22.75c0 8.89-3.6 16.93-9.43 22.75a32.07 32.07 0 01-22.75 9.43c-8.88 0-16.93-3.6-22.75-9.43a32.07 32.07 0 01-9.42-22.75c0-8.88 3.6-16.93 9.42-22.75a32.07 32.07 0 0122.75-9.42z"
              stroke="#FFF"
              strokeOpacity=".6"
              strokeWidth="1.5"
            />{" "}
          </g>{" "}
        </g>{" "}
      </svg>
    </div>
  );
};

export default FaceplateIcon;
