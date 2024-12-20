import { ipcMain, IpcMainEvent, IpcMainInvokeEvent } from "electron";
import { CHANNELS } from "./handler/constants";
import type { AuthCredentials } from "./type";

import authHandler from "./handler/auth-handler";
import vaultHandler from "./handler/vault-handler";
import userHandler from "./handler/user-handler";

import { loadContentViews } from "./main";
import type { VaultDataType } from "@src/global.type";

function handleAuthentication(event: IpcMainInvokeEvent, action: string, authCredentials: AuthCredentials) {
    switch (action) {
        case CHANNELS.AUTH.LOGIN:
            return authHandler.login(authCredentials);
        case CHANNELS.AUTH.SIGN_UP:
            return authHandler.signUp();
        case CHANNELS.AUTH.LOGOUT:
            return authHandler.lougout();
    }
}

function handleVault(event: IpcMainInvokeEvent, action: string, vault: VaultDataType) {
    switch (action) {
        case CHANNELS.VAULT.GET_ALL:
            return vaultHandler.getVaultList();
        case CHANNELS.VAULT.CREATE:
            return vaultHandler.createVault(vault)
        case CHANNELS.VAULT.DETAILS:
            return vaultHandler.getVaultDetails(vault.id)
        case CHANNELS.VAULT.UPDATE:
            return vaultHandler.updateVault(vault)
        case CHANNELS.VAULT.DELETE:
            return vaultHandler.deleteVault(vault)
    }
}

function handleUser(event: IpcMainInvokeEvent, action: string) {
    switch (action) {
        case CHANNELS.USER.GET:
            return userHandler.getInfo();
    }
}

function handleOpenBrowserview(event: IpcMainEvent, name: string) {
    switch (name) {
        case CHANNELS.VAULT_UI.CREATE:
            loadContentViews('create-vault', 'create_vault');
            break;
        case CHANNELS.HOME:
            loadContentViews('home', 'home');
            break;
        case CHANNELS.VAULT.DETAILS:
            loadContentViews('vault-details', 'vault_detail');
            break;
    }
}

export function initIpc() {
    ipcMain.handle('auth', handleAuthentication)
    ipcMain.handle('vault', handleVault)
    ipcMain.handle('user', handleUser)

    ipcMain.on('open-browserview', handleOpenBrowserview)
}