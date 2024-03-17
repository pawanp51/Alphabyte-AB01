import jobOpening from '../models/jobOpening.js';

export const getAllJobs = async (req, res) => {
    try {
        const allJobs = await jobOpening.find();
        res.status(200).json({ jobs: allJobs });
    } catch (error) {
        console.error('Error fetching all jobs:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


