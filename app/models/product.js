// app/models/product.js
const db = require('../../config/db');

const Product = {
  getAll: (callback) => {
    db.query('SELECT * FROM produtos', callback);
  },

  getById: (id, callback) => {
    db.query('SELECT * FROM produtos WHERE id = ?', [id], callback);
  },

  create: (productData, callback) => {
    db.query('INSERT INTO produtos SET ?', [productData], callback);
  },

  update: (id, productData, callback) => {
    db.query('UPDATE produtos SET ? WHERE id = ?', [productData, id], callback);
  },

  delete: (id, callback) => {
    db.query('DELETE FROM produtos WHERE id = ?', [id], callback);
  },
};

module.exports = Product;