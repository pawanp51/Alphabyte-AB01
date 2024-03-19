import express from "express";
import { sendEmails } from "../controllers/handleEmail.js";

const router = express.Router();

router.post("/", sendEmails);

export default router;

