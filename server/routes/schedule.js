import express from 'express';
import {createSchedule} from '../controllers/schedule.js';

const router = express.Router();

router.post('/createSchedule', createSchedule);

export default router;