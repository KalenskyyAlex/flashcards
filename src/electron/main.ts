import {app, BrowserWindow} from "electron";
import path from "path";
import { isDev } from "./util.js";

app.on("ready", () => {
    const mainWindow = new BrowserWindow({});
    if (isDev()) {
        console.log("PROFILE=dev is set, running react in HMR mode");
        mainWindow.loadURL("http://localhost:5173");
    } else {
        mainWindow.loadFile(path.join(app.getAppPath(), "/dist-react/index.html"));
    }
})