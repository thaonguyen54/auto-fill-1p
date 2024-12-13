import { ipcMain, IpcMainInvokeEvent } from "electron";
import { CHANNELS } from "./handler/constants";
import type { AuthCredentials } from "./type";

import authHandler from "./handler/auth-handler";
import vaultHandler from "./handler/vault-handler";
import userHandler from "./handler/user-handler";

function handleAuthentication(event: IpcMainInvokeEvent, action: string, authCredentials: AuthCredentials) {
    switch (action) {
        case CHANNELS.AUTH.LOGIN:
            return authHandler.login(authCredentials);
        case CHANNELS.AUTH.SIGN_UP:
            return authHandler.signUp();
    }
}

function handleVault(event: IpcMainInvokeEvent, action: string, vaultName: string) {
    switch (action) {
        case CHANNELS.VAULT.GET_ALL:
            return vaultHandler.getVaultList();
    }
}

function handleUser(event: IpcMainInvokeEvent, action: string) {
    switch (action) {
        case CHANNELS.USER.GET:
            return userHandler.getInfo();
    }
}

export function initIpc() {
    ipcMain.handle('auth', handleAuthentication)
    ipcMain.handle('vault', handleVault)
    ipcMain.handle('user', handleUser)
}