import mongoose from "mongoose";
const Schema = mongoose.Schema;

const interviewSlotSchema = new Schema({
  startTime: { type: String },
  endTime: { type: String },
  candidate: { type: String },
});

export default mongoose.model("interviewSlot", interviewSlotSchema);
