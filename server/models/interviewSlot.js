import mongoose from "mongoose";
const Schema = mongoose.Schema;

const interviewSlotSchema = new Schema({
  date: { type: String },
  startTime: { type: String },
  endTime: { type: String },
  candidate: { type: String },
});

export default mongoose.model("InterviewSlot", interviewSlotSchema);
