const express = require('express');
const router = express.Router();
const { getAllCategories } = require('../controllers/categorieController.js');
const { getSpecialitesByCategorie } = require('../controllers/specialiteController.js');
const { getArtisansByCategorie } = require('../controllers/artisanController.js');

router.get('/', getAllCategories);
router.get('/:id/specialites', getSpecialitesByCategorie);
router.get('/:id/artisans', getArtisansByCategorie);

module.exports = router;