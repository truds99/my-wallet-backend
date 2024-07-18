import { Router } from "express";
import { postTransactions } from "../controllers/transactions-controller.js";
import { validateToken } from "../middlewares/auth-middleware.js";

const transactionsRouter = Router();

transactionsRouter.use(validateToken)
transactionsRouter.post('/transactions', postTransactions);

export default transactionsRouter;