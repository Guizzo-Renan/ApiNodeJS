const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const purchaseController = require('../controllers/purchaseController');

router.post('/', authMiddleware, purchaseController.createPurchase);
router.get('/usuario/:id', authMiddleware, purchaseController.getAllPurchasesByUser);

module.exports = router;