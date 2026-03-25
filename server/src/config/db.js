import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
  try {
    const fullConnectionString = `${process.env.MONGODB_URI}/${DB_NAME}`;
    console.log("\n Connecting to MONGODB...");
    // console.log("Connection string:", fullConnectionString);
    const connectionInstance = await mongoose.connect(fullConnectionString);
    console.log(
      `\n MongoDB connected : DB HOST : ${connectionInstance.connection.host}`,
    );
  } catch (error) {
    console.log("\n MONGODB connection FAILED : ", error);
    process.exit(1);
  }
};

export default connectDB;
