// app/models/category.js
const db = require('../../config/db');

const Category = {
  getAll: (callback) => {
    db.query('SELECT * FROM categorias', callback);
  },

  createCategory: (categoryData, callback) => {
    db.query('INSERT INTO categorias SET ?', [categoryData], callback);
  },
};

module.exports = Category;