const db = require('../../config/db');

const Purchase = {
  createPurchase: (purchaseData, callback) => {
    db.query('INSERT INTO compras SET ?', [purchaseData], callback);
  },

  getAllPurchasesByUser: (userId, callback) => {
    db.query('SELECT * FROM compras WHERE usuario_id = ?', [userId], callback);
  },
};

module.exports = Purchase;