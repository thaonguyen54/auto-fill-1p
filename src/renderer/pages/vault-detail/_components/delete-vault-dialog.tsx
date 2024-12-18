import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import VaultDetailContext from "@src/renderer/pages/vault-detail/context/vault-detail";

import React, { useContext } from "react";

export function DeleteVaultDialog() {
  const vaultDetailContext = useContext(VaultDetailContext);
  const handleDialog = () => {
    document.getElementById("overlay")?.classList.add("hidden");
    vaultDetailContext?.setShowDeleteDialog(false);
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
        <form className="pt-4">
          <Input
            type="password"
            className="focus:outline-none focus:shadow-secondary-sky transition-shadow duration-300"
          />
          <Button className="bg-red-500 w-full rounded-3xl mt-4 hover:bg-red-600 font-medium">
            Permanently Delete Vault
          </Button>
        </form>
      </div>
    </div>
  );
}