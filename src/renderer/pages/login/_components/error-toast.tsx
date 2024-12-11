import React from "react";

interface ErrorToastProps {
  message: string;
}

const ErrorToast = ({ message }: ErrorToastProps) => {
  return (
    <div className="bg-soft-pink p-3 rounded-lg font-medium text-sm mt-4 shadow-inset-soft-peach animate-shake">
      {message}
    </div>
  );
};

export default ErrorToast;
