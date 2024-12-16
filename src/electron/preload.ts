import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld('electronAPI', {
    auth: (channel: string, ...args: any[]) => ipcRenderer.invoke(channel, ...args),
    vault: (channel: string, ...args: any[]) => ipcRenderer.invoke(channel, ...args),
    user: (channel: string, ...args: any[]) => ipcRenderer.invoke(channel, ...args),

    openBrowserView: (name: string) => ipcRenderer.send('open-browserview', name)
})