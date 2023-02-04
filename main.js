const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const isDev = !app.isPackaged;
const RESOURCES_PATH = app.isPackaged
  ? path.join(process.resourcesPath)
  : path.join(__dirname);
const getAssetPath = (...paths) => {
  return path.join(RESOURCES_PATH, ...paths);
};
const { PrismaClient } = require(getAssetPath("./assets/database/client"));
const prisma = new PrismaClient();
const knex = require("knex")({
  client: "better-sqlite3",
  connection: {
    filename: getAssetPath("./assets/dev.db"),
  },
  useNullAsDefault: true,
});
async function testdata() {
  try {
    // const data = await knex("User").select("*");
    // console.log(data);
    const data2 = await prisma.user.findMany();
    console.log(data2);
  } catch (error) {
    console.log(error.message);
  }
}
testdata();
function createWindow() {
  // Browser Window <- Renderer Process
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    backgroundColor: "white",
    webPreferences: {
      nodeIntegration: false,
      worldSafeExecuteJavaScript: true,
      contextIsolation: true,
      preload: path.join(__dirname, "./preload.js"),
    },
  });
  win.loadFile("index.html");
  isDev && win.webContents.openDevTools();
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
  }
});

ipcMain.handle("test", async (event, someArgument) => {
  const data2 = await prisma.user.findMany();
  console.log(data2);
  return data2;
});
