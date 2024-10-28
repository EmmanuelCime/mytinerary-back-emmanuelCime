import mongoose from "mongoose";

let url = process.env.URI_MONGO;

console.log(url);

async function connectDatabase() {
    try {
        await mongoose.connect(process.env.URI_MONGO)
        console.log("Database connected");
    } catch (error) {
        console.log(error);
    }
}


connectDatabase();