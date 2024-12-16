import Header from "@components/common/header";
import React from "react";

interface HeaderLayoutProps {
  headerName: string;
  children: React.ReactNode;
}

const WithHeader = ({ headerName, children }: HeaderLayoutProps) => {
  return (
    <div className="w-full h-full min-h-screen">
      <Header name={headerName} />
      {children}
    </div>
  );
};

export default WithHeader;
