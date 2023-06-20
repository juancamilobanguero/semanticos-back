import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();

export const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGODB_URI || "");
      console.log("DB is already connected!");
    } catch (error) {
      console.log(error);
    }
  };