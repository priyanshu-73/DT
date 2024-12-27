# Event Management API

This is an Event Management API built with Node.js and Express, connected to a MongoDB database.

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your MongoDB connection string:
   ```
   MONGODB_URI=<your-mongodb-connection-string>
   ```

4. Start the server:
   ```bash
   npm start
   ```

   The server will start on port 5000.

## API Endpoints

- `POST /api/v3/app/events` - Create a new event
- `GET /api/v3/app/events` - Get all events
- `GET /api/v3/app/events/:id` - Get a specific event by ID
- `PUT /api/v3/app/events/:id` - Update an event by ID
- `DELETE /api/v3/app/events/:id` - Delete an event by ID

## Data Model

When creating a nudge for an event, the following object data model is used:

```json
{
  "type": "event",
  "uid": 18,
  "name": "Name of the event",
  "tagline": "A proper tag-line for the event",
  "schedule": "Timestamp (Date + time)",
  "description": "String",
  "files": {
    "image": "Image file (File upload)"
  },
  "moderator": "A user who is going to host",
  "category": "Category of the event",
  "sub_category": "Sub category",
  "rigor_rank": "Integer value",
  "attendees": ["Array of user Id's who is attending the event"]
}
```
