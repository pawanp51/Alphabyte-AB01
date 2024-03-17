import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Auth from './routes/auth.js';
import Recruiter from './routes/Recruiter.js';
import Candidate from './routes/Candidate.js';
import JobOpening from './routes/jobOpening.js';
import createSchedule from './routes/schedule.js'
import Stripe from 'stripe';
dotenv.config();
const stripe = Stripe(process.env.SECRET_KEY);

const app = express();
app.use(cors({
    origin : "http://localhost:5173"
}));    
app.use(express.json());

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
app.use('/schedule', createSchedule);
app.post("/checkout", async(req, res) => {
    try{
        const session  = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items:req.body.items.map(item => {
                return{
                    price_data: {
                        currency: "inr",
                        product_data: {
                            name: item.name
                        },
                        unit_amount: item.price * 100
                    },
                    quantity: item.quantity
                }
            }),
            success_url: 'http://localhost:5173/success',
            cancel_url: 'http://localhost:5173/cancel',
        });
        console.log(session);
        res.json({url : session.url, sessionId: session.id});
    }catch(error){
        res.status(500).json({error : error.message});
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on port : ${PORT}`);
})