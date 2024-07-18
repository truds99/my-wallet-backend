import { Router } from "express";
import { signin, signup } from "../controllers/user-controller.js";
import { signinSchema, signupSchema } from "../schemas/user-schemas.js";
import { validateSchema } from "../middlewares/schemas-middleware.js";

const userRouter = Router();

userRouter.post('/sign-up', validateSchema(signupSchema), signup);
userRouter.post('/sign-in', validateSchema(signinSchema), signin);

export default userRouter;