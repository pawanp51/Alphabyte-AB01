import express from "express";
import { createJobOpening, getAllJobPosts } from "../controllers/jobOpening.js";
import { getJobPosts } from "../controllers/jobOpening.js";

const router = express.Router();

router.post("/createJob", createJobOpening);
//only for jobs posted by the recruiter
router.get("/getJobPosts/:creatorId", getJobPosts);
router.get("/getAllJobPosts", getAllJobPosts);

export default router;
