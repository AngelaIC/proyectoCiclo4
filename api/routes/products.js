import express from "express";
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from "../controllers/product.js";
import Product from "../models/Product.js";
const router = express.Router();

//Create
router.post("/", createProduct);

//Update
router.put("/:id", updateProduct);

//Delete
router.delete("/:id", deleteProduct);

//Get
router.get("/:id", getProduct);

//Get all
router.get("/", getProducts);


export default router;