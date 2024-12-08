/* WORKING CODE
import express from "express"
import cors from "cors"
import reviews from "./api/reviews.route.js"

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/v1/reviews", reviews)
app.use("*", (req, res) => res.status(404).json({error: "not found"}))

export default app 
*/

import express from 'express';
import cors from 'cors';
import reviews from './api/reviews.route.js';

const app = express();

app.use((req, res, next) => {
  console.log('Request origin:', req.get('origin'));
  console.log('Request headers:', req.headers);
  next();
});

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],  
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());

app.use('/api/v1/reviews', reviews);

app.use('*', (req, res) => res.status(404).json({ error: 'Route not found' }));

export default app;











