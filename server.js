import express from 'express';
import eventRouter from './routes/events.routes.js';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

// Dotevn config
dotenv.config();

// Connect to MongoDB
connectDB();

// Create express app
const app = express();


// Midlleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/v3/app', eventRouter)

// Starting the server
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});