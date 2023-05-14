import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

try {
  await mongoose.connect(process.env.MONGO_URI);
} catch (error) {
  console.log('connectDB');
}

app.listen(8800, () => {
  console.log('server run 8800');
});
