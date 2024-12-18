import React from "react";

interface OverlayProps {
  className?: string;
}

const Overlay = ({ className }: OverlayProps) => {
  return (
    <div
      id="overlay"
      className={`fixed inset-0 bg-black bg-opacity-50 z-10 hidden ${className}`}
    ></div>
  );
};

export default Overlay;