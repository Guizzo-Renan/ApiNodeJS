// app/controllers/categoryController.js
const Category = require('../models/category');

const categoryController = {
  getAllCategories: (req, res) => {
    Category.getAll((err, categories) => {
      if (err) {
        res.status(500).json({ error: 'Erro ao buscar as categorias no banco de dados.' });
      } else {
        res.json(categories);
      }
    });
  },

  createCategory: (req, res) => {
    const { nome } = req.body;
    const categoryData = { nome };
    Category.createCategory(categoryData, (err, result) => {
      if (err) {
        res.status(500).json({ error: 'Erro ao criar a categoria no banco de dados.' });
      } else {
        res.status(201).json({ message: 'Categoria criada com sucesso.', id: result.insertId });
      }
    });
  },
};

module.exports = categoryController;