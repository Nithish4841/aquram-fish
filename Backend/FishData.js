import mongoose from "mongoose";

const FishDataSchema = new mongoose.Schema({
    product :{
        type: String,
        required: true
    },
    Totalprice :{
        type: String,
        required: true
    },

    Name: {
        type: String,
        required: true
    },
    phoneno: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    pincode: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
}, { timestamps: true });

const FishData = mongoose.model("FishData", FishDataSchema);

export default FishData;
