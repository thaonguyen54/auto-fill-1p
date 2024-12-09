import type { Vault } from "../type";
import type { IObserver } from "../publisher/type";

import tokenPublisher from "../publisher/token-publisher";
import { COMMAND } from "./constants";

import { exec } from "child_process";

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

    async getVaultList(): Promise<Vault[]> {
        const execPromise = (cmd: string): Promise<string> => {
            return new Promise((resolve, reject) => {
                exec(cmd, (error, stdout) => {
                    if (error) {
                        reject(error);
                    }

                    resolve(stdout);
                });
            });
        }

        const result = await execPromise(`${COMMAND} vault list --session ${this.token} --format=json`);
        const vaults: Vault[] = JSON.parse(result);

        return vaults
    }
}

export default VaultHandler.getInstance();