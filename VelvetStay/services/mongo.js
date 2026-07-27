import mongoose from "mongoose";

export async function dbConnect() {
  try {
    const connection = mongoose.connect(process.env.MONGO_URI);
    console.log("Database Connected!");
    return connection;
  } catch (err) {
    console.log(err);
  }
}
