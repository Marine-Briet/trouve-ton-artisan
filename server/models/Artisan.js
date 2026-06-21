const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Artisan = sequelize.define('Artisan', {
    id_artisan: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nom: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(150),
        allowNull: false,
        unique: true
    },
    ville: {
        type: DataTypes.STRING(150),
        allowNull: false
    },
    note: {
        type: DataTypes.DECIMAL(2,1),
        allowNull: false
    },
    a_propos: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    site_web: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    img_URL: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    top_artisan: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    id_specialite: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'specialite',
            key: 'id_specialite'
        }
    }
});

module.exports = Artisan;