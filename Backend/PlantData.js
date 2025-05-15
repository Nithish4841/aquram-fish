import mongoose from "mongoose";

const PlantDataSchema = new mongoose.Schema({
    Name:
    {
        type: String,
        required: true
    },
    phoneno:
    {
        type: String,
        required: true
    },
    quantity:
    {
        type: Number,
        required: true
    },
    country:
    {
        type: String,
        required: true
    },
    address:
    {
        type: String,
        required: true
    },
    pincode:
    {
        type: String,
        required: true
    },
    email:
    {
        type: String,
        required: true,
        unique: true
    }
}, { timestamps: true });

// ✅ Correct export
const PlantData = mongoose.model("PlantData", PlantDataSchema);
export default PlantData;
