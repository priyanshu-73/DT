import { MongoClient, ObjectId } from "mongodb";

export const client = new MongoClient("mongodb+srv://priyanshu:Saxena_3008@database.kb6tz0w.mongodb.net/DT?retryWrites=true&w=majority&appName=Database");

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
