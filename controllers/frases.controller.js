let frases = [];

export async function fetchFrases() {
  try {
    const res = await fetch(process.env.FRASES_URL);
    frases = await res.json();
    console.log('Frases cargadas correctamente:', frases.length);
  } catch (error) {
    frases = ["Ups, no se pudieron cargar las frases."];
    console.error('Error fetching frases:', error);
  }
}

export function getFrase(req, res) {
  const randomIndex = Math.floor(Math.random() * frases.length);
  return res.json({ message: frases[randomIndex] });
}

export async function recargarFrases(req, res) {
  await fetchFrases();
  return res.json({ message: 'Frases recargadas correctamente.' });
}

export { frases };