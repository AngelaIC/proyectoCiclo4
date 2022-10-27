import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError} from "../utils/error.js";
import jwt from "jsonwebtoken";

//Para crear el registro de usuario nuevo
export const register = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            nombreusuario: req.body.nombreusuario,
            email: req.body.email,
            password: hash,
        });
        await newUser.save();
        res.status(200).send("Usuario creado, estado : Pendiente por aprobación de un administrador. ");
    } catch (err) {
        next(err);
        
    }
};

//Para crear el login
export const login = async (req, res, next) => {
    try {
        // Verifica que el Usuario escriba algo en el campo del nombre de usuario
        const user = await User.findOne({ nombreusuario: req.body.username });
        if(!user) return next(createError(404, "Por favor valide este campo"));

        //Verifica que el Usuario escriba algo en el campo de contraseña (password)
        const isPasswordCorrect = await bcrypt.compare(
            req.body.password, 
            user.password
        );

        if(!isPasswordCorrect) 
            return next(createError(400, "La contraseña no es válida"));

        const token = jwt.sign({id:user._id, isAdmin: user.isAdmin }, process.env.JWT);    

        const {password, isAdmin, ...otherDetails} = user._doc;
        res.cookie("access_token", token, {
            httpOnly: true,
        } )
        .status(200)
        .json({ ...otherDetails});
    } catch (err) {
        next(err); 
    }
};