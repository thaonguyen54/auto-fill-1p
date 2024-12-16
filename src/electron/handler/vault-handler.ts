
import type { IObserver } from "../publisher/type";
import type { VaultType } from "@src/global.type";

import tokenPublisher from "../publisher/token-publisher";
import { COMMAND } from "./constants";

import { ResourceType } from "../enum";
import { execPromise } from "@utils/exec-promise";

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
        const vaults = await execPromise<VaultType[]>(`${COMMAND} vault list --session ${this.getData(ResourceType.TOKEN)} --format=json`);
        return vaults
    }

    async createVault(vault: VaultType): Promise<VaultType> {
        const result = await execPromise<VaultType>(`${COMMAND} vault create "${vault.name}" ${vault.description && ` --description ${vault.description}`} --session ${this.getData(ResourceType.TOKEN)} --format=json`);
        return result;
    }
}

export default VaultHandler.getInstance();