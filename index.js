import express from 'express';
import dotenv from 'dotenv';
import { fetchFrases } from './controllers/frases.controller.js';
import frasesRouter from './routes/frases.route.js';

dotenv.config();

const app = express();

app.use('/api/frase', frasesRouter);

fetchFrases().then(() => {
  app.listen(3000, () => {
    console.log('Server is running on :3000');
  });
});