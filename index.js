const express = require('express');
const cors = require('cors');
const { cities } = require('./assets/city');
const { vehicles } = require('./assets/vehicle');

const app = express();
app.use(express.json());
app.use(cors());

let fugitiveLocation = null;

function simulateFugitiveLocation() {
  const randomIndex = Math.floor(Math.random() * cities.length);
  fugitiveLocation = cities[randomIndex];
  console.log(`Fugitive is hiding in: ${fugitiveLocation.name}`);
}

simulateFugitiveLocation(); // Initialize fugitive location on server start

app.get('/cities', (req, res) => {
  res.json(cities);
});

app.get('/vehicles', (req, res) => {
  res.json(vehicles);
});

app.post('/capture', (req, res) => {
  const { cops } = req.body;

  if (!cops || cops.length !== 3) {
    return res.status(400).json({ error: 'Invalid data. Three cops are required.' });
  }

  const capturingCop = cops.find(cop => cop.city === fugitiveLocation.name);
  if (capturingCop) {
    return res.json({ success: true, capturingCop: capturingCop.name });
  }

  return res.json({ success: false, capturingCop: null });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});