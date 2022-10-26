import express from "express";
import Product from "../models/Product.js"

const router = express.Router();

//CRUD
//Create
router.post("/", async (req, res) => {

    const newProduct = new Product(req.body)

    try {
        const savedProduct = await newProduct.save()
        res.status(200).json(savedProduct);
    } catch (err) {
        res.status(500).json(err);
    }
});
//Update
router.put("/:id", async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id, 
            { $et: req.body },
            { new: true }
        );
        res.status(200).json(updatedProduct);
    } catch (err) {
        res.status(500).json(err);
    }
});
//Delete
router.delete("/:id", async (req, res) => {
    try {
        await Product.findByIdAndDelete(
            req.params.id
        );
        res.status(200).json("El producto ha sido eliminado");
    } catch (err) {
        res.status(500).json(err);
    }
});
//Get
router.get("/:id", async (req, res) => {
    try {
        const product = await Product.findById(
            req.params.id
        );
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json(err);
    }
});
//Get all
router.get("/", async (req, res) => {
    try {
        const products = await Product.find(
            req.params.id
        );
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json(err);
    }
});


export default router;