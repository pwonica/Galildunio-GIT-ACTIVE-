const electron = require('electron');
const { app, BrowserWindow } = electron;

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 1000,
        height: 700
    });

    mainWindow.setTitle('Code Builder');
    mainWindow.loadURL('file://$C:\Users\pwonica\Dropbox (Galileo Curriculum)\GSQ\Curriculum\Robot Pet\Code Builder\Galildunio (GIT ACTIVE)\demos\code\index.html');


    mainWindow.on('closed', () => {
        mainWindow = null;
    });
});