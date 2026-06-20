const { Specialite } = require('../models/index.js');

const getAllSpecialites = async (req, res) => {
    try {
        const specialites = await Specialite.findAll();
        return res.status(200).json(specialites);
    } catch (error) {
        return res.status(500).json({ error: 'Une erreur est survenue lors de la récupération des spécialités.' });
    }
};

const getSpecialitesByCategorie = async (req, res) => {
    try {
        const { id } = req.params;
        const specialites = await Specialite.findAll({ where: { id_categorie: id } });
        return res.status(200).json(specialites);
    } catch (error) {
        return res.status(500).json({ error: 'Une erreur est survenue lors de la récupération des spécialités.' });
    }
};

module.exports = { getAllSpecialites, getSpecialitesByCategorie };