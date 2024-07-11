import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: Number;
};

const connection: ConnectionObject = {};

const mongoURI = process.env.MONGODB_URI as string;

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("Already Connected to database.");
    return;
  }

  try {
    const db = await mongoose.connect(mongoURI, {});
    connection.isConnected = db.connections[0].readyState;
    console.log("Databse connected successfully.");
  } catch (error) {
    console.error("Database connection failed!", error);
    process.exit(1);
  }
}

export default dbConnect;
