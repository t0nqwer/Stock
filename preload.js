const { ipcRenderer, contextBridge } = require("electron");

contextBridge.exposeInMainWorld("bridge", {
  test: {
    invoke(channel) {
      console.log(channel);
    //   ipcRenderer.invoke(channel, someArgument).then((result) => {
    //     // ...
    //   });
      return ipcRenderer.invoke(channel);
    },
    once(channel, func) {
      const validChannels = ["getCOMPORT"];
      ipcRenderer.removeAllListeners("getCOMPORT");
      if (validChannels.includes(channel)) {
        return ipcRenderer.on(channel, (event, ...test) => func(...test));
      }
    },
  },
  receive: (channel, func) => {
    let validChannels = ["ScanData"];
    if (validChannels.includes(channel)) {
      return ipcRenderer.once("ScanData", (event, ...args) => func(...args));
    }
  },
  remove: (channel) => {
    console.log(ipcRenderer.listenerCount("scanbarcode"));
    console.log(ipcRenderer.listenerCount("getdata"));
    console.log(ipcRenderer.listenerCount("ScanData"));
    ipcRenderer.removeAllListeners(channel);
  },
  close: () => {
    ipcRenderer.send("close");
  },
  minimize: () => {
    ipcRenderer.send("minimize");
  },
  maximize: () => {
    ipcRenderer.send("maximize");
  },
  dev: () => {
    ipcRenderer.send("dev");
  },
  receipt: () => {
    ipcRenderer.send("Print");
  },

  // getNames,
});
// window.Noti = (message) => [ipcRenderer.send("notify", message)];
// ipcRenderer.on("ScanData", (e, data) => {
//   console.log(data.length);
// });
// const getNames = () => {
//   console.log(testdb.getname(););
//   return testdb.getname();
// };
