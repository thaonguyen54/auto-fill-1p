import { CHANNELS } from "../channel";
import { AuthHandler } from "./auth-handler";
import { SystemInfoHandler } from "./system-info-handler";

export class InitlHandler {
    public authHandler: AuthHandler;
    public systemInfoHandler: SystemInfoHandler;

    constructor() {
        this.authHandler = new AuthHandler();
        this.systemInfoHandler = new SystemInfoHandler();
    }

    handlePickChannel(channel: string) {
        switch (channel) {
            case CHANNELS.AUTH.LOGIN:
                return this.authHandler.login;
            case CHANNELS.AUTH.SIGNUP:
                return this.authHandler.signUp;
            case CHANNELS.SYSTEM_INFO:
                return this.systemInfoHandler.viewSystemInfo();
        }
    }
}