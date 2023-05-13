import express from 'express';
import mongoose from 'mongoose';

const app = express();

app.listen(8800, () => {
  console.log('server is runing! 8800');
});
