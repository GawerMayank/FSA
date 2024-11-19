import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("mongoDB connection successfull!!");
  } catch (error) {
    console.log("mongoDB connection failed!!");
    process.exit(1);
  }
};
