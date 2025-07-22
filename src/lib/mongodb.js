import mongoose from "mongoose";

let cachedDb = null;

export const dbConnect = async () => {
  if (cachedDb) {
    console.log("Using existing cached database connection.");
    return cachedDb;
  }

  try {
    const uri = process.env.MONGODB_URI;

    if (!uri) {
      throw new Error("MONGODB_URI is not defined in environment variables.");
    }

    await mongoose.connect(uri);
    console.log("Connected to MongoDB");

    cachedDb = mongoose.connection;
    return cachedDb;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    throw error;
  }
};
