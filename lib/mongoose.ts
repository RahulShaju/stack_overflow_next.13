import mongoose from "mongoose";
let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) return console.log("MONGO_URL IS MISSING");
  if (isConnected) {
    return console.log("Mongodb is already connected");
  }
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "devFlow",
    });
    isConnected = true;
    console.log("MongoDb is connected");
  } catch (error) {
    console.log("monogdb is not connected", error);
  }
};
