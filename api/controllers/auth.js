import User from "../models/User.js";
import bcrypt from "bcryptjs";
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
        res.status(200).send("Usuario creado, estado : Pendiente por aprobación de un administrador. ")



    } catch (error) {
        next(err)
        
    }
} 