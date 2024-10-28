import { Schema, model } from "mongoose";

let collection = "cities";
let schema = new Schema({
    _id: { type: Number, required: true },
    name: { type: String, required: true },
    photo: { type: String, required: true },
    country: { type: String, required: true },
    continent: { type: String, required: true },
    description: { type: String, required: true },
    currency: { type: String, required: true },
    language: { type: String, required: true },
    timeZone: { type: String, required: true },
    population: { type: Number, required: true },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    areaCode: { type: Number, required: true }
}, {
    timestamps: true
});

let City = model(collection, schema);
export default City