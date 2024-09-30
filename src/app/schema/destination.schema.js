import {model, Schema} from "mongoose";
const DestinationSchema = new Schema ({
    name:{
        type: String,
        required: true
    },
    distance: {
        type: Number,
        rquired: true,
    },
    baseFare:{
        type: Number,
        required: true,
    }

}, {timestamps: true});
export const Destination = model("Destination", DestinationSchema);