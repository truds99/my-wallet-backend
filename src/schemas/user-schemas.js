import joi from "joi";

export const signupSchema = joi.object({
    name: joi.string().required().trim(),
    email: joi.string().email().required().trim(),
    password: joi.string().required().min(6)
});

export const signinSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required()
});