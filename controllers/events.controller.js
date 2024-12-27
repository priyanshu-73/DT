import { MongoClient } from 'mongodb';
import connectDB from '../config/db.js';

export const postEvent = async (req, res) => {
  try {
    const client = new MongoClient(process.env.MONGO_URI);
    await client.connect();
    const db = client.db('DT');
    const collection = db.collection('events'); 

    const event = req.body; 
    const result = await collection.insertOne(event);

    res.status(201).json({ message: 'Event created', eventId: result.insertedId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create event' });
  }
};

export const getEvent = async (req, res) => {
  const {id} = req.params;
};