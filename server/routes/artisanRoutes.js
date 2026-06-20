const express = require('express');
const router = express.Router();
const { getAllArtisans, getArtisanById, getArtisansBySearch, getTopArtisans } = require('../controllers/artisanController.js');

router.get('/', getAllArtisans);
router.get('/search', getArtisansBySearch);
router.get('/top', getTopArtisans);
router.get('/:id', getArtisanById);

module.exports = router;