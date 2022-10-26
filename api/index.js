import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import categoriesRoute from "./routes/categories.js"
import productsRoute from "./routes/products.js"
import usersRoute from "./routes/users.js"

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
app.use(express.json())

app.use("/api/auth", authRoute);
app.use("/api/categories", categoriesRoute);
app.use("/api/products", productsRoute);
app.use("/api/users", usersRoute);

//Puerto en el que se estableció el backend
app.listen(4000, () => {
    connect()
    console.log("STONE STORE CONECTADO AL PUERTO 4000 DEL BACKEND!")
})