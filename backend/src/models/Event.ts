import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
  userId: String,
  page: String,
  type: String,
  timestamp: Number,
  duration: Number,
});

export default mongoose.model("Event", EventSchema);
