import type { Vault } from "../type";
import type { IObserver } from "../publisher/type";

import tokenPublisher from "../publisher/token-publisher";
import { COMMAND } from "./constants";

import { execSync } from "child_process";

class VaultHandler implements IObserver {
    private token: string;
    private static instance: VaultHandler;

    public static getInstance(): VaultHandler {
        if (!VaultHandler.instance) {
            VaultHandler.instance = new VaultHandler();
        }
        return VaultHandler.instance;
    }

    constructor() {
        this.token = '';
        tokenPublisher.subcribe(this);
    }

    update(data: any): void {
        this.token = data;
    }

    getVaultList(): Vault[] {
        const vaults = execSync(`${COMMAND} vault list --session ${this.token} --format=json`);
        return JSON.parse(vaults.toString());
    }
}

export default VaultHandler.getInstance();