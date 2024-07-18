import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./routers/user-router.js";
import transactionsRouter from "./routers/transactions-router.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(json());

app.use(transactionsRouter);
app.use(userRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is up and running on port ${port}`));
