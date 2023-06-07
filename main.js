const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const io = require("socket.io-client");
const axios = require("axios");

const isDev = !app.isPackaged;
const RESOURCES_PATH = app.isPackaged
  ? path.join(process.resourcesPath)
  : path.join(__dirname);
const getAssetPath = (...paths) => {
  return path.join(RESOURCES_PATH, ...paths);
};
// const {
//   addDtata,
//   addproduct,
//   delproduct,
//   selectproduct,
// } = require(getAssetPath("./assets/database.js"));

// const knex = require("knex")({
//   client: "better-sqlite3",
//   connection: {
//     filename: path.join("./assets/dev.db"),
//   },
//   useNullAsDefault: true,
// });
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
  // win.webContents.openDevTools();
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

// const socket = io("http://167.172.69.153");
// const socketLocal = io("http://localhost:8585");

// axios
//   .get(`http://localhost:8585/setting`)
//   .then(({ data }) => {
//     socket.emit("newUser", data.ShopName);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

// socket.on("price", (data) => {
//   socketLocal.emit("price", data);
// });
// socket.on("addSize", (data) => {
//   socketLocal.emit("addSize", data);
// });
// socket.on("newCloth", (data) => {
//   socketLocal.emit("newCloth", data);
// });
