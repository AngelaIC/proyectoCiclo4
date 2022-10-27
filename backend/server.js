const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 5050;

//Conexión a Mongo DB y al servidor
mongoose
    .connect(process.env.MONGO)
    .then(() => {
        app.listen(PORT, () => {
        console.log("STONE STORE CONECTADO AL PUERTO 5050");
        });
    })
    .catch((error) => console.log(error));