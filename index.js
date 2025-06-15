// server.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;            // puedes elegir otro

// Servir de forma estática todo lo que haya en /audio
app.use('/audio', express.static(path.join(__dirname, 'audio')));

// Ruta de prueba opcional
app.get('/', (req, res) => {
  res.send('Servidor de audio para Genially funcionando 🎶');
});

app.listen(PORT, () =>
  console.log(`⇒ Servidor local en http://localhost:${PORT}`)
);
