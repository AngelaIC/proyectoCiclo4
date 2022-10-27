import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";

export const verifyToken = (req, res, next) => {
    const token = req.cookies.acces_token;
    if(!token){
        return next(createError(401, "Lo sentimos, usted no está ahutorizad@"))
    }
}