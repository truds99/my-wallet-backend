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

export async function editTransactions(req, res) {
    const transaction = req.body;
    const { id } = req.params;
    const userId = res.locals.user._id;

    try { 
        const existingTransaction = 
            await db.collection("transactions").findOne({ _id: new ObjectId(id) });

        if (!existingTransaction) return res.sendStatus(httpStatus.NOT_FOUND);
        if (existingTransaction.userId.toString() !== userId.toString()) {
            return res.sendStatus(httpStatus.UNAUTHORIZED);
        }

        await db.collection("transactions").updateOne(
            { _id: new ObjectId(id) },
            { $set: transaction }
        );
        res.sendStatus(httpStatus.NO_CONTENT);
    }
    catch (err){
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
    } 
}

export async function deleteTransactions(req, res) {
    const { id } = req.params;
    const userId = res.locals.user._id;

    try { 
        const existingTransaction = 
            await db.collection("transactions").findOne({ _id: new ObjectId(id) });

        if (!existingTransaction) return res.sendStatus(httpStatus.NOT_FOUND);
        if (existingTransaction.userId.toString() !== userId.toString()) {
            return res.sendStatus(httpStatus.UNAUTHORIZED);
        }

        await db.collection("transactions").deleteOne({ _id: new ObjectId(id) });
        res.sendStatus(httpStatus.NO_CONTENT);
    }
    catch (err){
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
    } 
}