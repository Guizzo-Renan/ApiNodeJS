// app/models/stock.js
const db = require('../../config/db');

const Stock = {
  getStockByProductId: (productId, callback) => {
    db.query('SELECT * FROM estoque WHERE produto_id = ?', [productId], callback);
  },

  updateStockByProductId: (productId, newQuantity, callback) => {
    db.query('UPDATE estoque SET quantidade = ? WHERE produto_id = ?', [newQuantity, productId], callback);
  },

  createStock: (stockData, callback) => {
    db.query('INSERT INTO estoque SET ?', [stockData], callback);
  },
};

module.exports = Stock;
