import { Button } from "@components/ui/button";
import React from "react";

const KEY_ICON =
  "https://a.1passwordusercontent.com/JKRNV44YYJCQBEUIYHMP2DAHH4/e34v23yfgzc7debxdcgookapuu.png";

const DetailView = () => {
  return (
    <div className="bg-vaultDetails flex flex-col mt-10 max-w-5xl items-center w-[280px]">
      <div className=" max-w-3xl w-full h-auto flex flex-col p-5 justify-center items-center gap-3 bg-white border rounded-xl shadow-gray-shadow">
        <img src={KEY_ICON} alt="" className="w-16 h-16 rounded-full" />
        <p className="font-sans font-medium text-xl">Vault name</p>
        <p className="mt-[-8px] mb-">Vault description</p>
        <Button className="mt-8 h-7 w-full bg-light-blue hover:bg-dark-secondary-blue">
          Edit Details
        </Button>
      </div>
      <section>Footer</section>
    </div>
  );
};

export default DetailView;
