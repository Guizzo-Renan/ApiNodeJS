// app/routes/clothingSizes.js
const express = require('express');
const router = express.Router();
const clothingSizeController = require('../controllers/clothingSizeController');

router.get('/categoria/:id', clothingSizeController.getAllSizesByCategoryId);
router.post('/', clothingSizeController.createClothingSize);

module.exports = router;