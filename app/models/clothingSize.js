// app/models/clothingSize.js
const db = require('../../config/db');

const ClothingSize = {
  getAllSizesByCategoryId: (categoryId, callback) => {
    db.query('SELECT * FROM tamanho_roupa WHERE categoria_id = ?', [categoryId], callback);
  },

  createClothingSize: (clothingSizeData, callback) => {
    db.query('INSERT INTO tamanho_roupa SET ?', [clothingSizeData], callback);
  },
};

module.exports = ClothingSize;