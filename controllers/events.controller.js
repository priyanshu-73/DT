import { MongoClient, ObjectId } from "mongodb";
import { client } from "../config/db.js";

const db = client.db("DT");
const collection = db.collection("events");

export const postEvent = async (req, res) => {
  try {
    const event = req.body;
    const result = await collection.insertOne(event);

    res
      .status(201)
      .json({ message: "Event created", eventId: result.insertedId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create event" });
  }
};

export const getEvents = async (req, res) => {
  const { type, limit, page } = req.query;
  try {
    const cursor = collection.find().sort({ schedule: -1 });

    const eventsPerPage = limit ? parseInt(limit) : 5;
    const currentPage = page ? parseInt(page) : 1;
    const skip = (currentPage - 1) * eventsPerPage;

    const events = await cursor.skip(skip).limit(eventsPerPage).toArray();

    res.status(200).json(events);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to get events" });
  }
};

export const getEvent = async (req, res) => {
  const { id } = req.query;
  if (!id) {
    return res.status(400).json({ message: "Event ID is required" });
  }
  try {
    const event = await collection.findOne({ _id: new ObjectId(id) });

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.status(200).json(event);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to get event" });
  }
};

export const updateEvent = async (req, res) => {
  const { id } = req.params;
  try {
    const event = req.body;
    await collection.updateOne({ _id: new ObjectId(id) }, { $set: event });
    res.json({ message: "Event updated" });
  } catch {
    console.error(error);
    res.status(500).json({ message: "Failed to update event" });
  }
};

export const deleteEvent = async (req, res) => {
  const { id } = req.params;
  try {
    const event = await collection.findOne({ _id: new ObjectId(id) });

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    await collection.deleteOne({ _id: new ObjectId(id) });

    res.status(200).json({ message: "Event deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete event" });
  }
};
