import { db } from "../config/database.js";
import { signinSchema, signupSchema } from "../schemas/user-schemas.js";
import httpStatus from "http-status";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function signup(req, res) {
    const user = req.body;
    try { 
        if (await db.collection("users").findOne({ email: user.email })) {
            return res.sendStatus(httpStatus.CONFLICT)
        }
        await db.collection("users")
            .insertOne({...user, password: bcrypt.hashSync(user.password, 10)});
        res.sendStatus(httpStatus.CREATED);
    }
    catch (err){
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
    } 
};

export async function signin(req, res) {
    const user = req.body;
    try {
        const validUser = await db.collection("users")
            .findOne({ email: user.email });

        if (!validUser) return res.sendStatus(httpStatus.NOT_FOUND);
        if (!bcrypt.compareSync(user.password, validUser.password)) {
            return res.sendStatus(httpStatus.UNAUTHORIZED);
        }

        const token = jwt.sign({ userId: validUser._id }, process.env.JWT);

        res.status(httpStatus.OK).send(token);
    }
    catch (err){
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
    } 
};