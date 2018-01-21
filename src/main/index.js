import { app } from "electron";
import createMainWindow from "./createMainWindow";
import setAppMenu from "./setAppMenu";

let mainWindow = null;

function openFile() {
    console.log("openFile");
}

function saveFile() {
    console.log("saveFile");
}

function saveAsFile() {
    console.log("saveAsFile");
}

function exportPDF() {
    console.log("exportPDF");
}

app.on("ready", () => {
    mainWindow = createMainWindow();
    setAppMenu({ openFile, saveFile, saveAsFile, exportPDF });
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin"){
        app.quit();
    }
});

app.on("activate",(_e, hasVisibleWindows) => {
    if(!hasVisibleWindows) {
        mainWindow = createMainWindow();
    }
});
