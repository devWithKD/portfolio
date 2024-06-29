import mongoose from "mongoose";

export interface globalMongoose {
  conn: mongoose.Mongoose | null;
  promise: Promise<mongoose.Mongoose> | null;
}

declare global {
  var mongoose: globalMongoose;
}

global.mongoose = global.mongoose || {
  conn: null,
  promise: null,
};

export default async function dbConnect(): Promise<mongoose.Mongoose> {
  if (global.mongoose.conn) {
    return global.mongoose.conn;
  }
  if (global.mongoose.promise) {
    return await global.mongoose.promise;
  }

  try {
    const conString = process.env.MONGODB_URI;
    if (!conString)
      throw new Error("MONGODB_URI environment variable is not defined");

    global.mongoose.promise = mongoose.connect(conString, {
      autoIndex: true,
    });

    global.mongoose.conn = await global.mongoose.promise;
    return global.mongoose.conn;
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw new Error("Database connection failed");
  }
}

export const disconnect = (): void => {
  if (!global.mongoose.conn) {
    return;
  }
  global.mongoose.conn = null;
  mongoose.disconnect();
};
