import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Auth from './routes/auth.js';
import Recruiter from './routes/Recruiter.js';
import Candidate from './routes/Candidate.js';
import JobOpening from './routes/jobOpening.js';
import AIInterview from './routes/Ai-Interview.js';

const app = express();
app.use(cors());    
app.use(express.json());
dotenv.config();


const PORT = 5000;

mongoose.connect(process.env.MONGO_KEY).then(() => {
    console.log('Connected to database');
}).catch(() => {
    console.log('Connection failed');
}
);

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/auth', Auth);

app.use('/recruiter', Recruiter);
app.use('/candidate', Candidate);
app.use('/job', JobOpening);

app.use('/ai-interview',AIInterview);

app.listen(PORT, () => {
    console.log(`Server listening on port : ${PORT}`);
})