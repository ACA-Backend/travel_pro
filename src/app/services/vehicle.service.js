import {Vehicle} from "../schema/vehicle.schema.js";

export const createVehicle = async (payload) => {
    return await Vehicle.create(payload);
}

export const updateVehicle = async(id, payload) => {
    return await Book.findByIdAndUpdate(id,payload, {new: true});
}; 

export const deleteVehicle = async (id) => 
{
    return await Vehicle.findByIdAndDelete(id);
};