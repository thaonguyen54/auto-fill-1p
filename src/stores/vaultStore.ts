import { VaultDataType } from "@src/global.type";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface VaultState {
    selectedVault: VaultDataType | null;
    setSelectedVault: (value: VaultDataType | null) => void;
}

const useVaultStore = create<VaultState>()(
    persist(
        (set) => ({
            selectedVault: null,
            setSelectedVault: (value) => set({ selectedVault: value }),
        }),
        {
            name: 'vault-storage', 
        }
    )
);

export default useVaultStore;