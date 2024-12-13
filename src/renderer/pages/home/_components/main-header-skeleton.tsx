import { Skeleton } from "@components/ui/skeleton";
import React from "react";

const MainHeaderSkeleton = () => {
  return (
    <>
      <div className="mb-6">
        <h2 className="flex items-center pb-3">
          <Skeleton className="h-7 w-80" />
        </h2>
        <Skeleton className="h-7 w-96" />
      </div>
      <div className="flex  justify-between items-center">
        <h2 className="text-xl font-semibold">
          <Skeleton className="h-7 w-24" />
        </h2>
        <Skeleton className="p-2 w-24 h-8 border rounded-xl"/>
      </div>
    </>
  );
};

export default MainHeaderSkeleton;