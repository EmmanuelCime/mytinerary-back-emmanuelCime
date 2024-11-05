import { Schema, model } from "mongoose";
import "../models/Itinerary.js";

let collection = "users";
let schema = new Schema({
  _id: { type: Number, required: true },
  photo: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  category: { type: String, enum: ["collaborator", "client"], required: true },
  itineraries: [{ type: Schema.Types.ObjectId, ref: "Itineraries" }]
}, {
    timestamps: true
});


let User = model(collection, schema);
export default User;