import { db } from "../database.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import httpStatus from "http-status";
import { ObjectId } from "mongodb";

dotenv.config();

export async function validToken(req, res, next) {
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");
    if (!token) return res.sendStatus(401);

    try {
        jwt.verify(token, process.env.JWT, async (error, decoded) => {
            if (error) return res.sendStatus(httpStatus.UNAUTHORIZED);
            const user = await db.collection("users").findOne({ _id: new ObjectId(decoded.userId) });
            if (!user) return sendStatus(401);
    
            req.locals.user = user;
    
            next();
        })
    } catch (error) {
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }

}