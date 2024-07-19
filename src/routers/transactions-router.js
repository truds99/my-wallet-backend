import { Router } from "express";
import { postTransactions, getTransactions } from "../controllers/transactions-controller.js";
import { validateToken } from "../middlewares/auth-middleware.js";
import { validateSchema } from "../middlewares/schemas-middleware.js";
import { transactionSchema } from "../schemas/transactions-schemas.js";

const transactionsRouter = Router();

transactionsRouter.use(validateToken);
transactionsRouter.post('/transactions', validateSchema(transactionSchema), postTransactions);
transactionsRouter.get('/transactions', getTransactions);

export default transactionsRouter;