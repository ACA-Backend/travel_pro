import Joi from 'joi';

export const CreateVehicleRequest = Joi.object({
    plateNumber: Joi.string().unique().required(),
    model: Joi.string().required(),
    capacity: Joi.number().required(),
});