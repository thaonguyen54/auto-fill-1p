const { contextBridge, ipcRenderer } = require('electron')
import { CHANNELS } from "./channel"

contextBridge.exposeInMainWorld('electronAPI', {
    sendMessage: (message: string, ...args: any[]) => ipcRenderer.invoke(CHANNELS.SEND_MESSAGE, message, args),
})
