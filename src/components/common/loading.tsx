import React from "react";
import Spinner from "./spinner";

interface LoadingProps {
  className?: string;
}

const Loading = ({ className }: LoadingProps) => {
  return (
    <div
      className={`h-screen flex flex-col items-center justify-center ${className}`}
    >
      <div className="flex items-center justify-center">
        <Spinner />
      </div>
      <div className="text-center mt-4">Loading ...</div>
    </div>
  );
};

export default Loading;