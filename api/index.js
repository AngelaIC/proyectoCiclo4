import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import productsRoute from "./routes/products.js";
import categoriesRoute from "./routes/categories.js";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("STONE STORE CONECTADO A MONGO DB")
    } catch (error) {
        throw error;
    }
};

//Para ver si la conexión con mongo está establecida o no
mongoose.connection.on("disconnected", () =>{
    console.log("STONE STORE OFF MONGO DB")
})

mongoose.connection.on("connected", () =>{
    console.log("STONE STORE ON MONGO DB")
})

//Software intermedio (middlewares)
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/categories", categoriesRoute);
app.use("/api/products", productsRoute);
app.use("/api/users", usersRoute);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Ya valio"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
});

//Puerto en el que se estableció el backend
app.listen(4000, () => {
    connect()
    console.log("STONE STORE CONECTADO AL PUERTO 4000 DEL BACKEND!")
})