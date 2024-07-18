import httpStatus from "http-status";
import { db } from "../config/database.js";

export async function postTransactions(req, res) {
    const transaction = req.body;
    try { 
        await db.collection("transactions").insertOne(transaction)
        res.sendStatus(httpStatus.CREATED);
    }
    catch (err){
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
    } 
}