import { Router } from "express";
import { postTransactions, getTransactions, editTransactions } from "../controllers/transactions-controller.js";
import { validateToken } from "../middlewares/auth-middleware.js";
import { validateSchema } from "../middlewares/schemas-middleware.js";
import { transactionSchema } from "../schemas/transactions-schemas.js";

const transactionsRouter = Router();

transactionsRouter.use(validateToken);
transactionsRouter.post('/transactions', validateSchema(transactionSchema), postTransactions);
transactionsRouter.get('/transactions', getTransactions);
transactionsRouter.put('/transactions/:id', validateSchema(transactionSchema), editTransactions);

export default transactionsRouter;