import { exec, spawn } from "child_process";

import type { IObserver } from "../publisher/type";
import type { AuthCredentials } from "../type";

import { COMMAND } from "./constants";
import tokenPublisher from "../publisher/token-publisher";
import userPublisher from "../publisher/user-publisher";
import { loadContentViews } from "../main";
import { ResourceType } from "../enum";
import { removeErrorPrefix } from "@utils/clean-err";

class AuthHandler implements IObserver {
    private resources: { type: ResourceType, data: any }[]
    private static instance: AuthHandler;

    public static getInstance(): AuthHandler {
        if (!AuthHandler.instance) {
            AuthHandler.instance = new AuthHandler();
        }
        return AuthHandler.instance;
    }

    constructor() {
        this.resources = []
        tokenPublisher.subcribe(this);
    }

    update(type: ResourceType, data: any): void {
        if (data == null) {
            this.resources = [];
        } else{
            this.resources.push({ type, data });
        }
    }

    getData(type: ResourceType): any {
        return this.resources.find(resource => resource.type === type)?.data
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
                tokenPublisher.setToken(data.toString());
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

    lougout() {
        const process = exec(`${COMMAND} signout --all`);
        
        return new Promise((resolve, reject) => {
            process.on('exit', (code) => {
                if (code === 0) {
                    tokenPublisher.setToken(null);
                    userPublisher.setUser(null);
                    loadContentViews('', 'index');
                } else {
                    resolve(new Error("Failed to logout!"))
                }
            })
        })
    }
}

export default AuthHandler.getInstance();