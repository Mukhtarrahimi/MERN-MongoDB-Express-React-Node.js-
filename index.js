import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
const app = express();
dotenv.config();

// database
import connectDb from './config/db.js';
app.use(express.json());
app.use(morgan('dev'));

// server running
const startServer = async () => {
  try {
    await connectDb();
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`server runnging on port ${PORT}`);
    });
  } catch (err) {
    console.log(`Failed to start server ${err.message}`);
    process.exit();
  }
};

startServer();
