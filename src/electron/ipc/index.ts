import { ipcMain } from "electron";
import { CHANNELS } from "../channel";
import { InitlHandler } from "../handler/channel-handler";

function handleSendMessage(event: Electron.IpcMainInvokeEvent, message: string, args: any[]) {
    const initlHandler = new InitlHandler();
    const handler: any = initlHandler.handlePickChannel(message);

    return handler(...args);
}

export function initIpc() {
    ipcMain.handle(CHANNELS.SEND_MESSAGE, handleSendMessage)
}
