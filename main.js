const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const io = require("socket.io-client");
const axios = require("axios");
const fs = require("fs");

const isDev = !app.isPackaged;
const RESOURCES_PATH = app.isPackaged
  ? path.join(process.resourcesPath)
  : path.join(__dirname);
const getAssetPath = (...paths) => {
  return path.join(RESOURCES_PATH, ...paths);
};
let win;
function createWindow() {
  win = new BrowserWindow({
    width: 1200,
    height: 800,
    backgroundColor: "white",
    webPreferences: {
      nodeIntegration: false,
      worldSafeExecuteJavaScript: true,
      contextIsolation: true,
      enableRemoteModule: true,
      preload: path.join(__dirname, "./preload.js"),
    },
  });
  win.loadFile("index.html");
  win.maximize();
}
if (isDev) {
  require("electron-reload")(__dirname, {
    electron: path.join(__dirname, "node_modules", ".bin", "electron"),
  });
}

app.whenReady().then(createWindow);
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
    // win.webContents.openDevTools();
  }
});

ipcMain.on("print", (event, arg) => {
  console.log("Print");
  let win2 = new BrowserWindow({
    useContentSize: true,
    show: false,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  win2.once("ready-to-show", () => win2.show());
  fs.writeFile(
    getAssetPath("assets/data.json"),
    JSON.stringify(arg),
    function (err) {
      win2.loadURL(getAssetPath("assets/Barcode.html"));
      win2.webContents.on("did-finish-load", async () => {
        console.log(arg.pageqty);
        const options = {
          silent: true,
          deviceName: arg.PrinterName,
          margins: {
            marginType: "printableArea",
          },
          pageRanges: [{ from: 1 + "", to: arg.pageqty + "" }],
        };
        win2.webContents.print(options, () => {
          win2 = null;
        });
      });
    }
  );
});

ipcMain.on("printTransfer", async (event, arg) => {
  console.log("Print");

  let win3 = new BrowserWindow({
    useContentSize: true,
    show: false,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  win3.once("ready-to-show", () => win3.show());

  // console.log(JSON.stringify(arg).Printer);

  fs.writeFile(
    getAssetPath("assets/TransferData.json"),
    JSON.stringify(arg),
    function (err) {
      win3.loadURL(getAssetPath("assets/Transfer.html"));
      win3.webContents.on("did-finish-load", async () => {
        const options = {
          // silent: true,
          deviceName: arg.Printer,
          margins: {
            marginType: "printableArea",
          },
          pageRanges: [{ from: 1 + "", to: arg.pageqty + "" }],
          landscape: false,
        };
        win3.webContents.print(options, () => {
          // win3 = null;
        });
      });
    }
  );
});
