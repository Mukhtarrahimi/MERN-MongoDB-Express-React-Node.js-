import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`mongodb connected: ${conn.connection.host}`);

    mongoose.connect;
  } catch (err) {
    console.log(`monogDB Error ${err}`);
    process.exit();
  }
};
