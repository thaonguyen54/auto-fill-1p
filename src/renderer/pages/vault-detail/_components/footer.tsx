import { Switch } from "@components/common/switch";
import React from "react";

const Footer = () => {
  return (
    <div className="mx-auto mb-4 mt-5 p-[0.95rem] border border-solid rounded-xl 2md:w-[280px] w-full float-none clear-none block">
      <h2 className="mb-3 font-sans font-medium">Safe for Travel</h2>
      <div className="flex gap-3">
        <Switch className="h-8 min-w-[56px] [&>span]:h-7 [&>span]:w-7 [&>span]:bg-white [&[data-state=checked]>span]:translate-x-[24px] data-[state=checked]:bg-light-blue  [&[data-state=unchecked]>span]:translate-x-0 data-[state=unchecked]:bg-light-secondary-gray" />
        <div className="flex flex-col">
          <p className="text-sm">
            Turn on to keep this vault on devices during travel.
          </p>
          <p className="text-blue-700 text-sm underline">Learn More...</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;