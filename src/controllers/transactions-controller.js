import httpStatus from "http-status";
import { db } from "../config/database.js";
import { ObjectId } from "mongodb";

export async function postTransactions(req, res) {
    const transaction = {...req.body, userId: res.locals.user._id};
    try { 
        await db.collection("transactions").insertOne(transaction)
        res.sendStatus(httpStatus.CREATED);
    }
    catch (err){
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
    } 
}

export async function getTransactions(req, res) {
    const page = req.query.page || 1;
    const items = 10;
    const start = (page - 1) * items;
    const userId = res.locals.user._id;

    if (page % 1 !== 0 || page < 1) return res.sendStatus(httpStatus.BAD_REQUEST);
    try { 
        let transactions = await db.collection("transactions").find( { userId: new ObjectId(userId) }).toArray();
        transactions = transactions.reverse().slice(start, start + items);
        res.send(transactions).status(httpStatus.OK);
    }
    catch (err){
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
    } 
}