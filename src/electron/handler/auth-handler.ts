import { spawnSync } from "child_process";

import tokenPublisher from "../publisher/token-publisher";
import type { IObserver } from "../publisher/type";
import type { AuthCredentials } from "../type";

import { COMMAND } from "./constants";

class AuthHandler implements IObserver {
    private token: string;
    private static instance: AuthHandler;

    public static getInstance(): AuthHandler {
        if (!AuthHandler.instance) {
            AuthHandler.instance = new AuthHandler();
        }
        return AuthHandler.instance;
    }

    constructor() {
        this.token = '';
        tokenPublisher.subcribe(this);
    }

    update(data: any): void {
        this.token = data;
    }

    login(authCredentials: AuthCredentials) {
        const args = [
            'account',
            'add',
            '--address', authCredentials.address,
            '--email', authCredentials.email,
            '--secret-key', authCredentials.secretKey,
            '--signin',
            '--raw'
        ];

        const result = spawnSync(COMMAND, args, {
            input: `${authCredentials.password}\n`,
            encoding: 'utf8',
        });

        if (result.status !== 0) {
            return {success: false, message: 'Check your credentials or network and try again.'};
        }else{
            tokenPublisher.setToken(result.stdout);
            return {success: true, message: 'Login successful!'};
        }
    }

    signUp() {
        return "Sign up successful!";
    }
}

export default AuthHandler.getInstance();
