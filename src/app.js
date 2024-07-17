import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { db } from "./database.js";
import { userSchema } from "../src/schemas/user-schema.js"
import httpStatus from "http-status";

dotenv.config();
const app = express();
app.use(cors());
app.use(json());

app.post('/sign-up', async (req, res) => {
    const user = req.body;

    const validation = userSchema.validate(user, { abortEarly: false })
    if (validation.error) {
        const errors = validation.error.details.map((detail) => detail.message);
        return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(errors);
    }

    try { 
        if (await db.collection("users").findOne({ email: user.email })) {
            return res.sendStatus(httpStatus.CONFLICT)
        }
        await db.collection("users").insertOne(user);
        res.sendStatus(httpStatus.CREATED);
    }
    catch (err){
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
    } 
})

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is up and running on port ${port}`));
