import mongoose from "mongoose";
const { Schema } = mongoose;

const ProductSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    formato:{
        type: String,
        required: true
    },
    acabado:{
        type: String,
        required: true
    },
    usos:{
        type: String,
        required: true
    },
    category:{
        type: [String],
    },
    imagen:{
        type:[String],
    },
    descripcion:{
        type: String,
        required: true
    }
});

export default mongoose.model("Product", ProductSchema)