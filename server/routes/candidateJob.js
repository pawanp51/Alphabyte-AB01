import express from "express";
import { getAllJobs } from "../controllers/candidateJobs.js";

const router = express.Router();

router.get("/getAllJobs", getAllJobs);

export default router;
