import { Router } from "express";
import { signin, signup } from "../controllers/user-controller.js";

const userRouter = Router();

userRouter.post('/sign-up', signup);
userRouter.post('/sign-in', signin);

export default userRouter;