
import type { IObserver } from "../publisher/type";
import type { VaultType } from "@src/global.type";

import tokenPublisher from "../publisher/token-publisher";
import { COMMAND } from "./constants";

import { exec } from "child_process";
import { ResourceType } from "../enum";

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

        const result = await execPromise(`${COMMAND} vault list --session ${this.getData(ResourceType.TOKEN)} --format=json`);
        const vaults: VaultType[] = JSON.parse(result);

        return vaults
    }
}

export default VaultHandler.getInstance();