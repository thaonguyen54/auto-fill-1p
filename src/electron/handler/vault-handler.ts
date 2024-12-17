
import type { IObserver } from "../publisher/type";
import type { VaultType } from "@src/global.type";

import tokenPublisher from "../publisher/token-publisher";
import { COMMAND } from "./constants";

import { ResourceType } from "../enum";
import { execPromise } from "@utils/exec-promise";
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

    async getVaultList(): Promise<VaultType[]> {
        const vaults = await execPromise<VaultType[]>(`${COMMAND} vault list ${includeCredentials(this.getData(ResourceType.TOKEN))}`);
        return vaults
    }

    async createVault(vault: VaultType): Promise<VaultType> {
        try{
            const result = await execPromise<VaultType>(`${COMMAND} vault create "${vault.name}" ${vault.description && ` --description ${vault.description}`} ${includeCredentials(this.getData(ResourceType.TOKEN))}`);
            return result;
        }catch(e){
            throw new Error(e as any)
        }
    }
}

export default VaultHandler.getInstance();