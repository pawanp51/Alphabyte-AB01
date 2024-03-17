import express from "express";
import { getProfile } from "../controllers/Profile.js";
const router = express.Router();

router.post("/", getProfile);

export default router;
