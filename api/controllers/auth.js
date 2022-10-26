import User from "../models/User.js";
import bcrypt from "bcryptjs";

//Para crear el registro de usuario nuevo
export const register = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            nombreusuario: req.body.nombreusuario,
            email: req.body.email,
            password: hash,
        })

        await newUser.save()
        res.status(200).send("Usuario creado, estado : Pendiente por aprobación de un administrador. ");
    } catch (error) {
        next(err);
        
    }
};
//Para crear el login
export const login = async (req, res, next) => {
    try {
        const user = User.findOne({nombreusuario:req.body.username})
        res.status(200).send("STONE STORE LE DA LA BIENVENIDA");
    } catch (error) {
        next(err);
        
    }
};