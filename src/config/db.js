import mongoose from "mongoose";
// import { MONGODB_URI } from "./index.js";

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017', {
      autoIndex: true,
    });
    console.log("Database Connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
