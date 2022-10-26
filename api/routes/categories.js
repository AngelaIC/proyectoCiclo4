import express from "express";
import Category from "../models/Product.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("CATEGORIA WIII")
})
//CRUD
//Create
//Update
//Delete
//Get
//Get all


export default router