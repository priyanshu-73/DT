import express from "express";
import {
  deleteEvent,
  getEvent,
  getEvents,
  postEvent,
  updateEvent,
} from "../controllers/events.controller.js";

const router = express.Router();

// Get an Event
router.get("/event", getEvent);

// Post an Event
router.post("/events", postEvent);

// Get multiple events
router.get("/events", getEvents);

// Update an event
router.put("/events/:id", updateEvent);

// Delete an event
router.delete("/events/:id", deleteEvent);

export default router;
