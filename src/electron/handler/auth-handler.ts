import { spawnSync } from "child_process";

import tokenPublisher from "../publisher/token-publisher";
import { IObserver } from "../publisher/observer";

import { COMMAND } from "./constants";
import type { AuthCredentials } from "../type";

class AuthHandler implements IObserver {
    private token: string;
    
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
            '--address', 'https://my.1password.com/',
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

const authHandler = new AuthHandler();
export default authHandler;