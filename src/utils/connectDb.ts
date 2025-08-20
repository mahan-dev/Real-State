import mongoose from "mongoose";

const BASE_URL = process.env.MONGO_URI;

 const connectDb = async () => {
  if (mongoose.connections[0].readyState) return;
  mongoose.set("strictQuery", false);
  try {
    await mongoose.connect(BASE_URL);
    console.log("connection  succeeded 👌");
  } catch {
    console.log("something went wrong");
  }
};
export default connectDb