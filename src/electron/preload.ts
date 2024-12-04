import { AuthCredentials } from "./handler/auth-handler"

const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    viewSystemInfo: () => ipcRenderer.invoke('system-info'),
    signUp: (authCredentials: AuthCredentials) => ipcRenderer.invoke('signup', authCredentials),
    login: (authCredentials: AuthCredentials) => ipcRenderer.invoke('login', authCredentials)
})
