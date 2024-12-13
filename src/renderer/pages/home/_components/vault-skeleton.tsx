import React from "react";
import { Skeleton } from "@components/ui/skeleton";

const VaultSkeleton = () => {
  return (
    <div className="flex 2xl flex-col justify-between min-h-[270px] border border-solid border-gray-light rounded-md bg-white w-full mt-4">
      <div className="flex flex-col flex-grow px-5 pt-5 pb-3">
        <div className="relative h-10 border-b border-solid border-off-white bg-white-soft rounded-t-[6px] -mx-5 -mt-5 -mb-3">
          <div className="before:content-[' '] border-t border-solid border-gray-300 absolute h-2 bottom-0 left-0 right-0"></div>
          <div className="absolute right-6 top-5 z-10">
            <Skeleton className="w-10 h-10 rounded-full" />
          </div>
          <div className="absolute right-4 top-3 h-7 w-14 bg-white-ultra border border-solid border-gray-muted z-[5] rounded-t-[90px] border-b-off-white"></div>
          <div className="after:content-[' '] bg-white-ultra z-[5] absolute h-[7px] bottom-0 left-0 right-0"></div>
        </div>
        <div className="mt-10">
          <Skeleton className="h-6 w-24" />
          <Skeleton className="h-4 w-16 mt-2" />
        </div>
      </div>
      <div className="flex justify-between border border-t border-solid border-t-off-white rounded-b-sm">
          <div className="py-4 px-6 border-r border-solid border-r-off-white">
            <Skeleton className="w-[18px] h-4" />
          </div>
          <div className="py-4 px-6  text-right">
            <Skeleton className="w-[18px] h-4" />
          </div>
      </div>
    </div>
  );
};

export default VaultSkeleton;