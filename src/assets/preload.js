const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  fetchData: () => ipcRenderer.invoke("fetch-data"),
  updateData: (query, params) => ipcRenderer.invoke("update-data", query, params),
  insertData: (query, params) => ipcRenderer.invoke("insert-data", query, params),
});
