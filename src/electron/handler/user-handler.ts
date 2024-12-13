import type { IObserver } from "../publisher/type";
import type { User } from "../../global.type";

import tokenPublisher from "../publisher/token-publisher";
import userPublisher from "../publisher/user-publisher";

import { COMMAND } from "./constants";

import { exec } from "child_process";
import { ResourceType } from "../enum";

class UserHandler implements IObserver {
    private resources: Map<ResourceType, any>;
    private static instance: UserHandler;

    public static getInstance(): UserHandler {
        if (!UserHandler.instance) {
            UserHandler.instance = new UserHandler();
        }
        
        return UserHandler.instance;
    }

    constructor() {
        this.resources = new Map();
        
        tokenPublisher.subcribe(this, ResourceType.TOKEN);
        userPublisher.subcribe(this, ResourceType.USER)
    }

    update(type: ResourceType, data: any): void {
        this.resources.set(type, data);
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

        const user = await execPromise(`${COMMAND} account get --session ${this.resources.get(ResourceType.TOKEN)} --format=json`);
        userPublisher.setUser(user);

        return user;
    }
}

export default UserHandler.getInstance();