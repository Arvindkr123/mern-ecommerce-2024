import mongoose from "mongoose";
import { MONGO_URI } from "./envVar.config.js";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(MONGO_URI);
    console.log(
      "Database connected Successfully at",
      connection.connection.host
    );
  } catch (error) {
    console.log("Error: while connecting to DB...", error);
    process.exit(1);
  }
};

export default connectDB;
