import WithHeader from "@src/layout/with-header";
import RootContainer from "@utils/dom";
import React from "react";
import MainContent from "./_components/main-content";

import "@src/styles.css";
import { VaultDetailProvider } from "@src/renderer/pages/vault-detail/context/vault-detail";
import Overlay from "@components/common/overlay";

const VaultDetails = () => {
  return (
    <>
      <VaultDetailProvider>
        <WithHeader headerName="Vault Details">
          <Overlay className="z-[60]" />
          <MainContent />
        </WithHeader>
      </VaultDetailProvider>
    </>
  );
};

RootContainer.getRoot().render(<VaultDetails />);

export default VaultDetails;