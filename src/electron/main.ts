import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import * as url from 'url';
import CONFIG from '../../configs/config';
import { registerHandler } from './handler/ipc-handler';


let mainWindow: Electron.BrowserWindow | null;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, '../build/preload.bundle.js')
        }
    });

    if (CONFIG.ENV === 'development') {
        mainWindow.loadURL(`http://localhost:9000`);
        mainWindow.webContents.openDevTools();
    } else {
        mainWindow.loadURL(
            url.format({
                pathname: path.join(__dirname, '../build/index.html'),
                protocol: 'file:',
                slashes: true
            })
        );
    }

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

app.whenReady().then(() => {
    registerHandler();
    createWindow();
});
