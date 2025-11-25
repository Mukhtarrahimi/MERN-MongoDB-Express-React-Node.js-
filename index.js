import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
const app = express();
dotenv.config();

// Database
import { connectDB } from './config/db.js';

// User Route Import
import userRoute from './routes/userRoute.js';

// Middleware
app.use(express.json());
app.use(morgan('dev'));

// User Route
app.use('/api/user', userRoute);

// Server Running
const startServer = async () => {
  try {
    await connectDB();
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.log(`Failed to start server: ${err.message}`);
    process.exit(1);
  }
};

startServer();
