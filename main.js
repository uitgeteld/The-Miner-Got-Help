const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

let win;
function createWindow() {
    win = new BrowserWindow({
        fullscreen: true,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
            nodeIntegration: false
        }
    });
    Menu.setApplicationMenu(null);

    win.loadFile('dist/renderer/index.html');
}

const { ipcMain } = require('electron');
ipcMain.on('toggle-fullscreen', () => {
    if (win) {
        win.setFullScreen(!win.isFullScreen());
    }
});

app.whenReady().then(() => {
    createWindow();

    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit();
});
