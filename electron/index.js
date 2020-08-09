const { app, BrowserWindow} = require('electron')

function creationWindow() {
     const  win = new BrowserWindow({ width: 1099, height: 900 })
    win.loadURL('http://localhost:4000');
}

app.on('ready', creationWindow)