const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const { Client } = require("pg");
const databaseService = require("./src/app/testes/services/databaseService");

let mainWindow;
let dbClient;

// Função para criar a janela principal
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    fullscreen: false,
    webPreferences: {
      preload: path.join(__dirname,"/dist/electron-app/browser/assets/preload.js"), // Caminho correto do preload
      contextIsolation: true, // Boa prática de segurança
      nodeIntegration: false, // Desativar a integração direta do Node.js
      enableRemoteModule: false, // Desativar o módulo remoto
    },
  });

  // Carregar a aplicação Angular no Electron
  mainWindow.loadURL(
    `file://${path.join(__dirname, "/dist/electron-app/browser/index.html")}`
  );

  mainWindow.on("closed", function () {
    mainWindow = null;
  });
}

ipcMain.handle("fetch-data",async ()=>{
  try{
    const data = await databaseService.fetchData();
    return data;
  }catch (error){
    return { error: "Erro ao buscar dados." }
  }
});
ipcMain.handle("update-data", async (_, query, params) => {
  try {
    const rowCount = await databaseService.updateData(query, params);
    return { rowCount };
  } catch (error) {
    return { error: "Erro ao atualizar dados." };
  }
});
// Listener para INSERT
ipcMain.handle("insert-data", async (_, query, params) => {
  try {
    const rowCount = await databaseService.insertData(query, params);
    return { rowCount };
  } catch (error) {
    return { error: "Erro ao inserir dados." };
  }
});

// Eventos do ciclo de vida do Electron
app.on("ready", createWindow);

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
  if (dbClient) dbClient.end(); // Fecha a conexão com o banco de dados ao sair
});

app.on("activate", function () {
  if (mainWindow === null) createWindow();
});
