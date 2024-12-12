import { spawn } from "child_process";

import type { IObserver } from "../publisher/type";
import type { AuthCredentials } from "../type";

import { COMMAND } from "./constants";
import TokenPublisher from "../publisher/token-publisher";
import { loadContentViews } from "../main";
import { removeErrorPrefix } from "../../utils/clean-err";

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
        TokenPublisher.subcribe(this);
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
                TokenPublisher.setToken(data.toString());
                resolve({ success: true, message: "Login successful!" });
            });

            let stderr = '';

            process.stderr.on('data', (data) => {
                stderr += data.toString();
                console.log("std", stderr);
            });

            process.stdin.write(`${authCredentials.password}\n`);
            process.stdin.end();

            process.on('exit', (code) => {
                if (code === 0) {
                    loadContentViews('home', 'home');
                } else {
                    resolve({
                        success: false, err: {
                            message: removeErrorPrefix(stderr),
                        }
                    });

                    reject(new Error(stderr));
                }
            });
        })
    }

    signUp() {
        return "Sign up successful!";
    }
}

export default AuthHandler.getInstance();