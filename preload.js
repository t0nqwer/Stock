const { ipcRenderer, contextBridge } = require("electron");

contextBridge.exposeInMainWorld("bridge", {
  // invoke(channel) {
  //   console.log(channel);
  //   return ipcRenderer.invoke(channel);
  // },
  // receive: (channel, func) => {
  //   let validChannels = ["test"];
  //   if (validChannels.includes(channel)) {
  //     return ipcRenderer.on("test", (event, ...args) => func(...args));
  //   }
  // },
  // FindProduct: {
  //   send(channel, data) {
  //     ipcRenderer.send("getProduct", data);
  //   },
  //   once(channel, func) {
  //     const validChannels = ["getProduct"];
  //     ipcRenderer.removeAllListeners("getProduct");
  //     if (validChannels.includes(channel)) {
  //       ipcRenderer.on(channel, (event, test) => func(test));
  //     }
  //   },
  // },
  // remove: (channel) => {
  //   console.log(ipcRenderer.listenerCount("scanbarcode"));
  //   console.log(ipcRenderer.listenerCount("getdata"));
  //   console.log(ipcRenderer.listenerCount("ScanData"));
  //   ipcRenderer.removeAllListeners(channel);
  // },
  // close: () => {
  //   ipcRenderer.send("close");
  // },
  // minimize: () => {
  //   ipcRenderer.send("minimize");
  // },
  // maximize: () => {
  //   ipcRenderer.send("maximize");
  // },
  // dev: () => {
  //   ipcRenderer.send("dev");
  // },
  // receipt: () => {
  //   ipcRenderer.send("Print");
  // },
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
