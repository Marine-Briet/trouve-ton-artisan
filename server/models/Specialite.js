const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Specialite = sequelize.define('Specialite', {
    id_specialite: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nom: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    id_categorie: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'categorie',
            key: 'id_categorie'
        }
    }
});

module.exports = Specialite;