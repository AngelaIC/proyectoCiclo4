import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("AUTH FUNCIONA")
})


export default router
