import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();

const mongoClient = new MongoClient(process.env.DATABASE_URL);

try {
    await mongoClient.connect();
    console.log("Connected to MongoDB");
} catch (err) {
    console.log(err.message);
}

export const db = mongoClient.db();