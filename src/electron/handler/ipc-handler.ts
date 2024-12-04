import { ipcMain, IpcMainEvent } from "electron";
import { AuthHandler } from "../handler/auth-handler";
import { SystemInfoHandler } from "../handler/system-info-handler";

const ipcHandles = [
    {
        channel: 'signup',
        handler: new AuthHandler('signup').handle
    },
    {
        channel: 'login',
        handler: new AuthHandler('login').handle
    },
    {
        channel: 'system-info',
        handler: new SystemInfoHandler('system-info').handle
    }
]

const ipcOn = [
    {
        channel: 'send-message',
        handler: (event: IpcMainEvent, arg: any) => {
            console.log(arg);
            event.sender.send('received-message', 'Message received');
        }
    }
]

export function registerHandler() {
    ipcHandles.forEach((ipcHandle) => {
        return ipcMain.handle(ipcHandle.channel, ipcHandle.handler);
    });

    ipcOn.forEach((ipcOn) => {
        ipcMain.on(ipcOn.channel, ipcOn.handler);
    });
}




