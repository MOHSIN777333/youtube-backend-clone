import { DB_NAME } from "../constants.js";
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      `${process.env.MONGODB_URI}/ ${DB_NAME}`
    )

    console.log(
      `successfully connect mongodb server_host:${conn.connection.host}`
    );
  } catch (error) {
    console.log(`mongodb connection is faild :`, error);
    process.exit(1);
  }
};

export { connectDB };
