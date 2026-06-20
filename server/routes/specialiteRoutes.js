const express = require('express');
const router = express.Router();
const { getAllSpecialites } = require('../controllers/specialiteController.js');

router.get('/', getAllSpecialites);

module.exports = router;