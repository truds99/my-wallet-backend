import { transactionSchema } from "../schemas/transactions-schemas.js";
import httpStatus from "http-status";
import { db } from "../config/database.js";
import { validateToken } from "../middlewares/auth-middleware.js";

export async function postTransactions(req, res) {
    const transaction = req.body;

    const validation = transactionSchema.validate(transaction, { abortEarly: false })
    if (validation.error) {
        const errors = validation.error.details.map((detail) => detail.message);
        return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(errors);
    }

    try { 
        await db.collection("transactions").insertOne(transaction)
        res.sendStatus(httpStatus.CREATED);
    }
    catch (err){
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
    } 
}