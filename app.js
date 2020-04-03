const { app, BrowserWindow, shell } = require('electron')

let url
if (process.env.NODE_ENV === 'DEV') {
    url = 'http://localhost:8080/'
} else {
    url = `file://${process.cwd()}/dist/index.html`
}

function createWindow() {
    const window = new BrowserWindow({
        width: 800,
        height: 600,
        show: false,
        webPreferences: {
            nodeIntegration: true
        }
    })
    window.maximize()
    window.show()

    window.loadURL(url)
    if (process.env.NODE_ENV === 'DEV')
        window.webContents.openDevTools()

    window.webContents.on('new-window', function (event, url) {
        event.preventDefault();
        shell.openExternal(url);
    })
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})