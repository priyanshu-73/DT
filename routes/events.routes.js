import express from 'express';
import { getEvent, postEvent } from '../controllers/events.controller.js';

const router = express.Router();

// Get an Event
router.get('/events?id', getEvent);

// Post an Event
router.post('/events', postEvent);

export default router;