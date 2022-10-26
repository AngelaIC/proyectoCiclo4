import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    nombreusuario:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        unique: true
    },
    isAdmin:{
        type: Boolean,
        required: false,
    },
}, {timestamps:true});

export default mongoose.model("User", UserSchema)