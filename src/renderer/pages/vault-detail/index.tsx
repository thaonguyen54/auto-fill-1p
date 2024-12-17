import WithHeader from "@src/layout/with-header";
import RootContainer from "@utils/dom";
import React from "react";
import MainContent from "./_components/main-content";

import "@src/styles.css";

const VaultDetails = () => {
  return (
    <div>
      <WithHeader headerName="Vault Details">
        <MainContent />
      </WithHeader>
    </div>
  );
};

RootContainer.getRoot().render(<VaultDetails />);

export default VaultDetails;
