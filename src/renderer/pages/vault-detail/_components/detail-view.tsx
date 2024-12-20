import React, { useEffect } from "react";

import Header from "./header";
import VaultAction from "./vault-action";
import Footer from "./footer";

import { VaultDataType } from "@src/global.type";
import useVaultStore from "@stores/vaultStore";
import Loading from "@components/common/loading";

const DetailView = () => {
  const [vaultDetails, setVaultDetails] = React.useState<VaultDataType | null>(
    null
  );

  const { selectedVault } = useVaultStore();

  useEffect(() => {
    const fetchVaultDetails = async () => {
      const result = await (window as any).electronAPI.vault(
        "vault",
        "vault-details",
        selectedVault
      );

      setVaultDetails(result);
    };

    fetchVaultDetails();
  }, []);

  if (!vaultDetails) {
    return <Loading className="h-[58vh]"/>;
  }

  return (
    <div className="mt-10 max-w-[1024px] my-0 mx-auto 2md:block flex flex-col">
      <Header vaultSelected={vaultDetails} />
      <VaultAction />
      <Footer />
    </div>
  );
};

export default DetailView;
