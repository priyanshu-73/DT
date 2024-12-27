import { MongoClient, ObjectId } from "mongodb";

export const client = new MongoClient("");

const connectDB = async () => {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    return;
  } catch (error) {
    console.log(error);
  }
};


export default connectDB;
