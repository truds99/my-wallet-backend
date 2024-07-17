import joi from "joi";

export const transactionSchema = joi.object({
    value: joi.number().positive().required(),
    description: joi.string().required().trim(),
    type: joi.string().valid('deposit', 'withdraw').required()
});