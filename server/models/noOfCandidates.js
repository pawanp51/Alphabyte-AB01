import mongoose from "mongoose";

const noOfCandidatesSchema = mongoose.Schema({
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "jobOpening",
    required: true,
  },
  user: {
    type: String, //candidate id
    required: true,
  },
  marks:{
    type: Number,
    required: true,
    default: 0
  }
});

const noOfCandidatesModel = mongoose.model(
  "noOfCandidatesModel",
  noOfCandidatesSchema
);
export default noOfCandidatesModel;
