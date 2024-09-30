import Joi from 'joi';

export const CreateDestinationRequest = Joi.object({
    name: Joi.string().required(),
    distance: Joi.number().required(),
    baseFare: Joi.number().required(),
 })