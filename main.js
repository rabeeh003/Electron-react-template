const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')
const createWindow = () => {
    const win = new BrowserWindow({
        title: 'Electron',
        width: 800,
        height: 600
    });

    win.webContents.openDevTools();

    const staticUrl = url.format({
        pathname: path.join(__dirname, './app/build/index.html'),
        protocol : 'file',
    });

    win.loadURL(staticUrl)
}
app.whenReady().then(createWindow)