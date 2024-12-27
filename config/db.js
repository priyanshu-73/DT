import { MongoClient, ObjectId } from "mongodb";

const connectDB = async () => {
  try {
    const client = new MongoClient(process.env.MONGO_URI);
    await client.connect();
    console.log("Connected to MongoDB");
    return;
  } catch (error) {
    console.log(error);
  }
};


export default connectDB;
