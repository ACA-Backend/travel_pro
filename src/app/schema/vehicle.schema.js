import {model, Schema} from "mongoose";

const VehicleSchema = new Schema({
    plateNumber: {
        type: String,
        unique: true,
        required: true
    },
    model: {
        type: String,
        required: true,
    },
    capacity: {
        type: Number,
        required: true,
    }
}, {timestamps: true});

export const Vehicle = model("Vehicle", VehicleSchema);