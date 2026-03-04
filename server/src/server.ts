import dotenv from 'dotenv';

dotenv.config();

import app from './app';
import { connectDB } from './config/db';
import News from './models/News';

const port = Number(process.env.PORT) || 5000;

const startServer = async (): Promise<void> => {
  await connectDB();
  await News.syncIndexes();
  app.listen(port);
};

startServer().catch((error: unknown) => {
  throw error;
});
