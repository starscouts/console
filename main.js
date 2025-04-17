const { app, BrowserWindow, globalShortcut } = require('electron');

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    mainWindow.loadFile('index.html');
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });

    globalShortcut.register("VolumeUp", () => {
        console.log("Volume up!");
    });

    globalShortcut.register("VolumeDown", () => {
        console.log("Volume down!");
    });

    globalShortcut.register("VolumeMute", () => {
        console.log("Volume mute!");
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
