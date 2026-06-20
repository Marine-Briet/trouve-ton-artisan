// On importe le module Express
const express = require('express');

// On crée une instance de l'application
const app = express();

// On définit le port sur lequel le serveur va écouter
const PORT = 3000;

// Route de test, juste pour vérifier que ça fonctionne
app.get('/', (req, res) => {
  res.send('Le serveur fonctionne!');
});

// On démarre le serveur, qui va écouter les requêtes sur le port défini
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});