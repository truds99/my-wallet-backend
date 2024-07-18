import { Router } from "express";
import { postTransactions } from "../controllers/transactions-controller.js";

const transactionsRouter = Router();

transactionsRouter.post('/transactions', postTransactions);

export default transactionsRouter;