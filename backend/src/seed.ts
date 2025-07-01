import mongoose from "mongoose";
import dotenv from "dotenv";
import Event from "./models/Event";

dotenv.config();

async function insertTestEvent() {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log("Connected to MongoDB");

    const result = await Event.create({
      userId: "admin",
      page: "page1",
      type: "page_visit",
      timestamp: Date.now(),
      duration: 12,
    });

    console.log("Event inserted:", result);
    mongoose.disconnect();
  } catch (error) {
    console.error("Error inserting event:", error);
  }
}

insertTestEvent();
