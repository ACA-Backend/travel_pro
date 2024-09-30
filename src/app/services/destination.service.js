import { Destination } from "../schema/destination.schema.js";

export const createDestination = async (payload) => {
    return await Destination.create(payload);
}

export const updateDestination = async (payload) => {
    return await Destination.update(payload);
}

export const deleteDestination = async (id) => {
    return await Destination.findByIdAndDelete(id);
}