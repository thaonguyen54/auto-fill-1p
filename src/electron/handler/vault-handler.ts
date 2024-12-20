
import type { IObserver } from "../publisher/type";
import type { VaultDataType } from "@src/global.type";

import tokenPublisher from "../publisher/token-publisher";
import { COMMAND } from "./constants";

import { ResourceType } from "../enum";
import { execPromise } from "@utils/exec";
import { includeCredentials } from "@utils/command";

class VaultHandler implements IObserver {
    private resources: { type: ResourceType, data: any }[];
    private static instance: VaultHandler;

    public static getInstance(): VaultHandler {
        if (!VaultHandler.instance) {
            VaultHandler.instance = new VaultHandler();
        }
        return VaultHandler.instance;
    }

    constructor() {
        this.resources = []
        tokenPublisher.subcribe(this);
    }

    update(type: ResourceType, data: any): void {
        if (data == null) {
            this.resources = [];
        } else {
            this.resources.push({ type, data });
        }
    }

    getData(type: ResourceType): any {
        return this.resources.find(resource => resource.type === type)?.data
    }

    async getVaultList(): Promise<VaultDataType[]> {
        const vaults = await execPromise<VaultDataType[]>(`${COMMAND} vault list ${includeCredentials(this.getData(ResourceType.TOKEN))}`);
        return vaults
    }

    async createVault(vault: VaultDataType): Promise<VaultDataType> {
        try {
            const result = await execPromise<VaultDataType>(`${COMMAND} vault create "${vault.name}" ${vault.description && ` --description ${vault.description}`} ${includeCredentials(this.getData(ResourceType.TOKEN))}`);
            return result;
        } catch (e) {
            throw new Error(e as any)
        }
    }

    async getVaultDetails(id: string): Promise<VaultDataType> {
        try {
            const result = await execPromise<VaultDataType>(`${COMMAND} vault get ${id} ${includeCredentials(this.getData(ResourceType.TOKEN))}`);
            return result;
        } catch (e) {
            throw new Error(e as any)
        }
    }

    async updateVault(vault: VaultDataType): Promise<boolean> {
        try {
            await execPromise(`${COMMAND} vault edit ${vault.id} --name ${vault.name} ${vault.description && `--description ${vault.description}`} ${includeCredentials(this.getData(ResourceType.TOKEN))}`, false, true);
            return true;
        } catch (e) {
            throw new Error(e as any)
        }
    }

    async deleteVault(vault: VaultDataType): Promise<boolean> {
        try {
            await execPromise(`${COMMAND} vault delete ${vault.id} ${includeCredentials(this.getData(ResourceType.TOKEN))}`, false, true);
            return true;
        } catch (e) {
            throw new Error(e as any)
        }
    }
}

export default VaultHandler.getInstance();