import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
const app = express();
dotenv.config();

// database
import connectDb from './config/db.js';
app.use(express.json());
app.use(morgan('dev'));
connectDb();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
