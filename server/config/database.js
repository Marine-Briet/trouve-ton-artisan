// Configuration de la base de données avec Sequelize

require('dotenv').config();

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'mysql',
        logging: false, // false car pollue la console // true pour voir les requêtes SQL
        define: {
            timestamps: false, // false pour ne pas ajouter les colonnes createdAt et updatedAt automatiquement
            freezeTableName: true // true pour utiliser le nom de la table tel quel (pas de pluriel automatique)
        }
    }
);

module.exports = sequelize;