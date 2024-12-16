import React from "react";

import CreateVaultHeader from "./create-vault-header";
import CreateVaultForm from "./create-vault-form";

const MainContent = () => {
  return (
    <div className="p-5 w-full min-h-screen h-auto pt-24 bg-white-soft ">
      <div className="max-w-[590px] my-0 mx-auto shadow-gray-shadow rounded-lg">
        <CreateVaultHeader />
        <CreateVaultForm />
      </div>
    </div>
  );
};

export default MainContent;
