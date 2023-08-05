// app/routes/stock.js
const express = require('express');
const router = express.Router();
const stockController = require('../controllers/stockController');

router.get('/:id', stockController.getStockByProductId);
router.put('/:id', stockController.updateStockByProductId);
router.post('/', stockController.createStock);

module.exports = router;
