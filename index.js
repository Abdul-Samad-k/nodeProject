const express = require("express");
const bodyparser = require("bodyparse");
const app = express();
var http = require ('http').Server(app);
var config = require("./config");
const cors = require ("cors");
const mongoClient = require ("mongodb").mongoClient;
const bcrypt = require ("bcrypt");
app.use(cors());
const AdminExtensionRoutes = require ("./Routes/AdminExtension");
if (config.env=="dev") {
    http.listen(config.port, ()=>AutoEncryptionLoggerLevel.info(`app listening at 
        ${config.port}`));
} else
if(config.env=="qa"|| config.env=="prod")
{
    console.log("this is for qa and prod")
}

console.log("abdul samad")