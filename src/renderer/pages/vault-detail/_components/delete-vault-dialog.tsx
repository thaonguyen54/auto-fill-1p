import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import VaultDetailContext from "@src/renderer/pages/vault-detail/context/vault-detail";
import useVaultStore from "@stores/vaultStore";

import React, { useContext } from "react";

export function DeleteVaultDialog() {
  const vaultDetailContext = useContext(VaultDetailContext);
  const [password, setPassword] = React.useState("");
  const vaultStore = useVaultStore();

  const handleDialog = () => {
    document.getElementById("overlay")?.classList.add("hidden");
    vaultDetailContext?.setShowDeleteDialog(false);
  };

  const handleDeleteVault = async () => {
    try {
      await (window as any).electronAPI.vault(
        "vault",
        "delete",
        vaultStore.selectedVault
      );
      
      vaultStore.setSelectedVault(null);
      (window as any).electronAPI.openBrowserView("home");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="z-[99] flex flex-col w-80 bg-white  fixed left-1/2 top-[30%] transform -translate-x-1/2 border rounded-md ">
      <div className="h-12 flex justify-between items-center bg-red-100 px-4 border-b-2 border-b-red-100 bg-[rgba]">
        <div>{""}</div>
        <header>
          <h3 className="font-medium">Delete Vault</h3>
        </header>
        <div
          onClick={handleDialog}
          className="text-light-blue font-medium cursor-pointer"
        >
          Cancel
        </div>
      </div>
      <div className="p-4">
        <div>
          <strong>
            This vault and its 0 items will be permanently deleted.
          </strong>
          <br />
          <p>
            If you want to keep any of these items, move them to another vault.
          </p>
        </div>
        <p>
          To continue, enter your password and click Permanently Delete Vault.
        </p>
        <div className="pt-4">
          <Input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="focus:outline-none focus:shadow-secondary-sky transition-shadow duration-300"
          />
          <Button
            onClick={handleDeleteVault}
            disabled={password.length === 0}
            className={`w-full rounded-3xl mt-4 font-medium cursor-pointer ${
              password.length > 0
                ? "hover:bg-red-600 bg-red-500"
                : "bg-gray-300 cursor-not-allowed hover:bg-none border-2 "
            }`}
          >
            Permanently Delete Vault
          </Button>
        </div>
      </div>
    </div>
  );
}
