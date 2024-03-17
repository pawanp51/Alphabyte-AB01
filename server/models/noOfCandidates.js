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
});

const noOfCandidatesModel = mongoose.model(
  "noOfCandidatesModel",
  noOfCandidatesSchema
);
export default noOfCandidatesModel;
