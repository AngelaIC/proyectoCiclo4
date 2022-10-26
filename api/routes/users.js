import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello Moto Ok no")
})
//CRUD
//Create
//Update
//Delete
//Get
//Get all

export default router