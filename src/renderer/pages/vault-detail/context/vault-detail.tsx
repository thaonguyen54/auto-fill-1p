import React, { createContext, useState } from "react";

type DeleteVaultContextType = {
  showDelete: boolean;
  setShowDelete: React.Dispatch<React.SetStateAction<boolean>>;
  showDeleteDialog: boolean;
  setShowDeleteDialog: React.Dispatch<React.SetStateAction<boolean>>;
};

const VaultDetailContext = createContext<DeleteVaultContextType | undefined>(
  undefined
);

export const VaultDetailProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [showDelete, setShowDelete] = useState<boolean>(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState<boolean>(false);

  return (
    <VaultDetailContext.Provider
      value={{
        showDelete,
        setShowDelete,
        showDeleteDialog,
        setShowDeleteDialog,
      }}
    >
      {children}
    </VaultDetailContext.Provider>
  );
};

export default VaultDetailContext;