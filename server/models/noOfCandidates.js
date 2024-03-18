import mongoose from "mongoose";

const noOfCandidatesSchema = mongoose.Schema({
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "jobOpening",
    required: true,
  },
  user: {
    type: String, //user id
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  jobDesc: {
    type: String,
    required: true,
  },
  jobLocation: {
    type: String,
    required: true,
  },
});

const noOfCandidatesModel = mongoose.model(
  "noOfCandidatesModel",
  noOfCandidatesSchema
);
export default noOfCandidatesModel;
