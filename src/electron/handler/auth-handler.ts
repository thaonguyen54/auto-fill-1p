import { spawn } from "child_process";

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

        const process = spawn(COMMAND, args);

        return new Promise((resolve, reject) => {
            process.stdout.on('data', (data) => {
                resolve(data.toString());
            });

            process.stderr.on('data', (data) => {
                reject(data.toString());
            });

            let stdoutData = '';
            let stderrData = '';

            process.stdin.write(`${authCredentials.password}\n`);
            process.stdin.end();

            process.on('exit', (code) => {
                if (code === 0) {                    
                    resolve(stdoutData);
                } else {
                    reject(new Error(`Process exited with code ${code}, stderr: ${stderrData}`));  // Xử lý lỗi
                }
            });
        })
    }

    signUp() {
        return "Sign up successful!";
    }
}

export default AuthHandler.getInstance();
