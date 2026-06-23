// On importe le module Express
const express = require('express');

// On importe les routes
const categorieRoutes = require('./routes/categorieRoutes');
const specialiteRoutes = require('./routes/specialiteRoutes');
const artisanRoutes = require('./routes/artisanRoutes');
const contactRoutes = require('./routes/contactRoutes');

// On importe l'API KEY
const checkApiKey = require('./middlewares/checkApiKey');

// On importe CORS
const cors = require('cors');

// On crée une instance de l'application
const app = express();

// On permet à Express de lire le JSON envoyé dans le body des requêtes
app.use(express.json());

// On autorise cette URL
app.use(cors({
  origin: ['http://localhost:5173', 'https://trouve-ton-artisan-mb.netlify.app'],
}));

// On définit le port sur lequel le serveur va écouter
const PORT = 3000;

// Test :
const sequelize = require('./config/database');

sequelize.authenticate()
    .then(() => console.log('✅ Connexion à la base de données réussie.'))
    .catch((error) => console.error('❌ Erreur de connexion à la base de données :', error));

// Route de test, juste pour vérifier que ça fonctionne
app.get('/', (req, res) => {
  res.send('Le serveur fonctionne!');
});

// Route de l'API Key
app.use('/api', checkApiKey);

// Routes de l'API
app.use('/api/categories', categorieRoutes);
app.use('/api/specialites', specialiteRoutes);
app.use('/api/artisans', artisanRoutes);
app.use('/api/contact', contactRoutes);

// On démarre le serveur, qui va écouter les requêtes sur le port défini
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});