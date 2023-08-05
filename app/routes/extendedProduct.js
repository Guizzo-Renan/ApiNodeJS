// app/routes/extendedProduct.js
const express = require('express');
const router = express.Router();
const extendedProductController = require('../controllers/extendedProductController');

router.post('/', extendedProductController.createExtendedProduct);

module.exports = router;
