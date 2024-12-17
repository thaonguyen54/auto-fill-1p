import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import * as url from 'url';
import CONFIG from '../../configs/config';
import { initIpc } from './ipc';


let mainWindow: Electron.BrowserWindow | null;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, '../build/preload.bundle.js'),
            devTools: CONFIG.ENV === 'development' || CONFIG.ENV === 'staging'
        },

    });

    if (CONFIG.ENV === 'development') {
        mainWindow.loadURL(`http://localhost:9000`);
        
        mainWindow.webContents.openDevTools();
    } else {
        mainWindow.setMenuBarVisibility(false);
        mainWindow.loadURL(
            url.format({
                pathname: path.join(__dirname, '../build/index.html'),
                protocol: 'file:',
                slashes: true
            })
        );
    }

    initIpc();

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

export function loadContentViews(endpoint: string, routing: string) {
    if(CONFIG.ENV === 'development') {
        mainWindow?.webContents.loadURL(`http://localhost:9000/${endpoint}`);
    }else{
        mainWindow?.webContents.loadURL(url.format({
            pathname: path.join(__dirname, `../build/${routing}.html`),
        }));
    }
}

app.whenReady().then(() => {
    createWindow();
});