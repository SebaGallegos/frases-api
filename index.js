import express from 'express';

import dotenv from 'dotenv';
dotenv.config();

const app = express();
let frases = []

async function fetchFrases() {
  try {
    const res = await fetch(process.env.FRASES_URL);
    frases = await res.json();
    console.log('Frases cargadas correctamente:', frases.length);
  } catch (error) {
    frases = ["Ups, no se pudieron cargar las frases."];
    console.error('Error fetching frases:', error);
  }
}

app.get('/', (req, res) => {
  const randomIndex = Math.floor(Math.random() * frases.length);
  return res.json({ message: frases[randomIndex] });
});

fetchFrases().then(() => {
  app.listen(3000, () => {
    console.log('Server is running on :3000');
  });
});