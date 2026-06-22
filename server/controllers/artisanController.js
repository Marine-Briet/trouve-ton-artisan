const { Artisan, Specialite } = require('../models/index.js');
const { Op } = require('sequelize');


const getAllArtisans = async (req, res) => {
    try {
        const artisans = await Artisan.findAll();
        return res.status(200).json(artisans);
    } catch (error) {
        return res.status(500).json({ error: 'Une erreur est survenue lors de la récupération des artisans.' });
    }
};


const getArtisanById = async (req, res) => {
    const { id } = req.params;
    try {
        const artisan = await Artisan.findByPk(id);
        if (!artisan) {
            return res.status(404).json({ error: 'Artisan non trouvé.' });
        }
        return res.status(200).json(artisan);
    } catch (error) {
        return res.status(500).json({ error: 'Une erreur est survenue lors de la récupération de l\'artisan.' });
    }
};

const getArtisansByCategorie = async (req, res) => {
    const { id } = req.params;
    try {
        const artisans = await Artisan.findAll({
            include: {
                model: Specialite,
                where: { id_categorie: id },
            }
        });
        return res.status(200).json(artisans);
    } catch (error) {
        return res.status(500).json({ error: 'Une erreur est survenue lors de la récupération des artisans.' });
    }
};

const getArtisansBySearch = async (req, res) => {
    const { nom } = req.query;
    try {
        const artisans = await Artisan.findAll({
            where: {
                nom: {
                    [Op.like]: `%${nom}%`
                }
            }
        });
        return res.status(200).json(artisans);
    } catch (error) {
        return res.status(500).json({ error: 'Une erreur est survenue lors de la récupération des artisans.' });
    }
};

const getTopArtisans = async (req, res) => {
    try {
        const topArtisans = await Artisan.findAll({
            where: { top_artisan: true },
            limit: 3,
            include: { model: Specialite }
        });
        return res.status(200).json(topArtisans);
    } catch (error) {
        return res.status(500).json({ error: 'Une erreur est survenue lors de la récupération des artisans.' });
    }
};

module.exports = { getAllArtisans, getArtisanById, getArtisansByCategorie, getArtisansBySearch, getTopArtisans };
