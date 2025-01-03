import type { IObserver } from "../publisher/type";
import type { User } from "@src/global.type";

import tokenPublisher from "../publisher/token-publisher";
import userPublisher from "../publisher/user-publisher";

import { COMMAND } from "./constants";

import { ResourceType } from "../enum";
import { execPromise } from "@utils/exec";
import { includeCredentials } from "@utils/command";

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
        const user = await execPromise<User>(`${COMMAND} account get ${includeCredentials(this.getData(ResourceType.TOKEN))}`);
        userPublisher.setUser(user);
        return user;
    }
}

export default UserHandler.getInstance();