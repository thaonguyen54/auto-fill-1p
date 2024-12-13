import React from "react";

import type { VaultType } from "../../../../global.type";
import Vault from "./vault";
import wrapPromise from "../../../../utils/wrap-promise";

let vaultResource: { read: () => VaultType } | null = null;

const fetchVaults = () => {
  if (!vaultResource) {
    const promise = (window as any).electronAPI.vault("vault", "get-all");
    vaultResource = wrapPromise(promise);
  }
  return vaultResource;
};

const VaultList = () => {
  const vaults: any = fetchVaults().read();

  return (
    <>
      {vaults.map((item: VaultType) => (
        <Vault key={item.id} name={item.name} items={item.items} />
      ))}
    </>
  );
};

export default VaultList;