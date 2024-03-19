import express from "express";
import { createTemplate, updateTemplateQuestions , getTemplates} from "../controllers/template.js";

const router = express.Router();

router.post("/create", createTemplate);
router.post('/update', updateTemplateQuestions)
router.post('/getTemplates', getTemplates);

export default router;
