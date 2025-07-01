import express from 'express';                      // Import Express
import mongoose from 'mongoose';                   // Import Mongoose to connect to MongoDB
import cors from 'cors';                           // Enable Cross-Origin Resource Sharing
import eventRoutes from './routes/events';         // Import event routes
import dotenv from 'dotenv';                       // Load .env config

dotenv.config();                                   // Load variables from .env

const app = express();                             // Initialize Express app
const PORT = process.env.PORT || 5000;             // Use PORT from env or default to 5000

app.use(cors());                                   // Enable CORS
app.use(express.json());                           // Parse JSON request bodies
app.use('/api', eventRoutes);                      // Mount API routes at /api

mongoose.connect(process.env.MONGO_URI!)           // Connect to MongoDB using URI
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error(err));
