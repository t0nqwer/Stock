const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const axios = require("axios");
const { log } = require("console");
const { selectproduct } = require("./assets/database");
const isDev = !app.isPackaged;
const RESOURCES_PATH = app.isPackaged
  ? path.join(process.resourcesPath)
  : path.join(__dirname);
const getAssetPath = (...paths) => {
  return path.join(RESOURCES_PATH, ...paths);
};
const { addDtata, addproduct, delproduct } = require(getAssetPath(
  "./assets/database.js"
));

const knex = require("knex")({
  client: "better-sqlite3",
  connection: {
    filename: path.join("./assets/dev.db"),
  },
  useNullAsDefault: true,
});
let win;
function createWindow() {
  // Browser Window <- Renderer Process
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
  win.webContents.openDevTools();
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

ipcMain.on("getProduct", async (event, someArgument) => {
  console.log(someArgument);
  // win.webContents.openDevTools();

  if (someArgument === "oline") {
    const url = "http://localhost:8080";

    axios
      .get(`${url}/getallproductdata`)
      .then(async (e) => {
        product = e.data;
        delproduct();
        e.data.map((e) => {
          addproduct(e);
        });
        const data = await selectproduct();
        event.reply("getProduct", data);
      })
      .catch(function (error) {
        event.reply("getProduct", "no Internet");
        console.log(error);
      });
  } else {
    const data = await selectproduct();
    event.reply("getProduct", data);
  }
});
