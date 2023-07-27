//dependencies
import mongoose from "mongoose";

//external imports
import env from "./utilities/validateEnv";

//variables
const mongoURl = env.MONGO_CONNECTION_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURl);
    console.log("Mongo DB connected");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

export default connectDB;
