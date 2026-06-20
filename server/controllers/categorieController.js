const { Categorie } = require('../models/index.js');

const getAllCategories = async (req, res) => {
    try {
        const categories = await Categorie.findAll();
        return res.status(200).json(categories);
    } catch (error) {
        return res.status(500).json({ error: 'Une erreur est survenue lors de la récupération des catégories.' });
    }
};

module.exports = { getAllCategories };