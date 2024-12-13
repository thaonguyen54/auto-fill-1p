import type { IObserver } from "../publisher/type";
import type { User } from "@src/global.type";

import tokenPublisher from "../publisher/token-publisher";
import userPublisher from "../publisher/user-publisher";

import { COMMAND } from "./constants";

import { exec } from "child_process";
import { ResourceType } from "../enum";

class UserHandler implements IObserver {
    private resources: { type: ResourceType, data: any }[];
    private static instance: UserHandler;
    
    public static getInstance(): UserHandler {
        if (!UserHandler.instance) {
            UserHandler.instance = new UserHandler();
        }
        
        return UserHandler.instance;
    }

    constructor() {
        this.resources = [];
    
        tokenPublisher.subcribe(this);
        userPublisher.subcribe(this)
    }

    getData(type: ResourceType): any {
        return this.resources.find(resource => resource.type === type)?.data
    }

    update(type: ResourceType, data: any): void {
        if (data == null) {
            this.resources = [];
        } else {
            this.resources.push({ type, data });
        }
    }

    async getInfo(): Promise<User> {
        const execPromise = (cmd: string): Promise<User> => {
            return new Promise((resolve, reject) => {
                exec(cmd, (error, stdout) => {
                    if (error) {
                        reject(error);
                    }
                    resolve(JSON.parse(stdout) as User);
                });
            });
        }

        const user = await execPromise(`${COMMAND} account get --session ${this.getData(ResourceType.TOKEN)} --format=json`);
        userPublisher.setUser(user);

        return user;
    }
}

export default UserHandler.getInstance();