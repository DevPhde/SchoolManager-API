import "dotenv/config";
import express from "express";
import { PrettyConsole } from "./helper/PrettyLog/PrettyConsole";
import cors from "cors";
import { routes } from "./Routes";
import { syncTables } from "./helper/SyncTables/ConfigTables";

const app = express();

app.listen(process.env.PORT || 3000, () => {
    PrettyConsole.log('Server Running')
})

app.use(express.json())
app.use(cors())
app.use(routes)

syncTables()