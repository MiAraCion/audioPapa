// server.js
const express = require('express');
const path = require('path');
const ngrok = require('ngrok'); // Importar ngrok

const app = express();
const PORT = 3000;

// Servir archivos estáticos desde /audio
app.use('/audio', express.static(path.join(__dirname, 'audio')));

// Ruta raíz opcional
app.get('/', (req, res) => {
  res.send('🎧 Servidor de audio para Genially funcionando');
});

// Iniciar el servidor local y luego abrir ngrok
app.listen(PORT, async () => {
  console.log(`✅ Servidor local corriendo en: http://localhost:${PORT}`);

  try {
    const publicUrl = await ngrok.connect({
      addr: PORT,
      authtoken: '2sjvHmeLJumlrpsS9aZgwmnsQfl_92id59th51cK9QW8Ci4f', // Opcional si ya configuraste `ngrok config add-authtoken`
    });

    console.log(`🌐 URL pública con HTTPS (ngrok): ${publicUrl}`);
    console.log(`🎵 Enlace de tu audio: ${publicUrl}/audio/mimusica.mp3`);

  } catch (err) {
    console.error('❌ Error al iniciar ngrok:', err);
  }
});
