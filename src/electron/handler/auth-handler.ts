import { IpcMainInvokeEvent } from "electron";
import { Handler } from ".";

export type AuthCredentials = {
    email: string;
    secretKey: string;
    password: string;
}

export class AuthHandler extends Handler<any> {
    channel: string;

    constructor(channel: string) {
        super();
        this.channel = channel;
    }

    handle = (event: IpcMainInvokeEvent, authCredentials: AuthCredentials): Promise<any> => {
        if(this.channel === 'signup'){
            return this.handleSignUp(authCredentials);
        } else {
            return this.handleLogin(authCredentials);
        }
    }

    handleSignUp = async (authCredentials: AuthCredentials) => {
        console.log("Signup >>>>", authCredentials);
        return authCredentials;
    }

    handleLogin = async (authCredentials: AuthCredentials) => {
        console.log("Login >>>>", authCredentials);
        return authCredentials;
    }
}