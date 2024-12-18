import React, { useContext } from "react";
import { DeleteVaultDialog } from "./delete-vault-dialog";
import VaultDetailContext from "@src/renderer/pages/vault-detail/context/vault-detail";

const VaultAction = () => {
  const vaultDetailContext = useContext(VaultDetailContext);

  const openDeleteSection = () => {
    vaultDetailContext?.setShowDelete(!vaultDetailContext?.showDelete);
  };

  const openDeleteDialog = () => {
    document.getElementById("overlay")?.classList.remove("hidden");
    vaultDetailContext?.setShowDelete(false);
    vaultDetailContext?.setShowDeleteDialog(true);
  };

  return (
    <>
      <div className="hidden fixed top-0 left-0 w-full h-full z-10"></div>
      <div className="mt-5 relative">
        <div className="2md:w-[280px] w-full mb-4 float-left clear-left">
          <div className="border bg-white hover:bg-secondary-white text-light-blue font-medium p-3 rounded-lg cursor-pointer ">
            View Vault
          </div>
        </div>
        <div className="2md:w-[280px] w-full float-left clear-left">
          <div className="border bg-white p-3 hover:bg-secondary-white text-light-blue font-medium  rounded-t-lg cursor-pointer ">
            Import Data
          </div>
        </div>
        <div className="2md:w-[280px] w-full float-left clear-left">
          <div
            onClick={openDeleteSection}
            className="border bg-white p-3 hover:bg-secondary-white text-light-blue font-medium rounded-b-lg flex justify-between cursor-pointer"
          >
            <p>More Actions</p>
            <div>...</div>
          </div>
        </div>
        {vaultDetailContext?.showDelete && (
          <div
            onClick={openDeleteDialog}
            className="absolute top-40 border 2md:w-[280px] w-full rounded-xl p-4 bg-white text-red-500 font-medium cursor-pointer"
          >
            Delete Vault
          </div>
        )}
        {vaultDetailContext?.showDeleteDialog && <DeleteVaultDialog />}
      </div>
    </>
  );
};

export default VaultAction;