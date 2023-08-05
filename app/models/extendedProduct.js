// app/models/extendedProduct.js
const db = require('../../config/db');

const ExtendedProduct = {
  getByProductId: (productId, callback) => {
    db.query('SELECT * FROM produto_extenso WHERE produto_id = ?', [productId], callback);
  },

  createExtendedProduct: (extendedProductData, callback) => {
    db.query('INSERT INTO produto_extenso SET ?', [extendedProductData], callback);
  },
};

module.exports = ExtendedProduct;