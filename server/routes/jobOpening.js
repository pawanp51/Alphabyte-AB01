import express from 'express';
import { createJobOpening } from '../controllers/jobOpening.js';
import { getJobPosts } from '../controllers/jobOpening.js';

const router = express.Router();

router.post('/createJob',createJobOpening);
//only for jobs posted by the recruiter
router.get('/getJobPosts/:id', getJobPosts);

export default router;

