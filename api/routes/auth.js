import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("AUTH FUNCIONA")
})

router.get("/register", (req, res) => {
    res.send("AUTH REGISTER FUNCIONA")
})



export default router
