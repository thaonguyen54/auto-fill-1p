import { IObserver } from "../publisher/observer";
import tokenPublisher from "../publisher/token-publisher";

import type { Vault } from "../type";
import { COMMAND } from "./constants";

import { execSync } from "child_process";

class VaultHandler implements IObserver {
    private token: string;

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

const vaultHandler = new VaultHandler();
export default vaultHandler;