// app/controllers/clothingSizeController.js
const Category = require('../models/category');
const ClothingSize = require('../models/clothingSize');

const clothingSizeController = {
  getAllSizesByCategoryId: (req, res) => {
    const categoryId = req.params.id;
    Category.getById(categoryId, (err, category) => {
      if (err) {
        res.status(500).json({ error: 'Erro ao buscar a categoria no banco de dados.' });
      } else if (category.length === 0) {
        res.status(404).json({ error: 'Categoria não encontrada.' });
      } else {
        ClothingSize.getAllSizesByCategoryId(categoryId, (error, sizes) => {
          if (error) {
            res.status(500).json({ error: 'Erro ao buscar os tamanhos no banco de dados.' });
          } else {
            res.json(sizes);
          }
        });
      }
    });
  },

  createClothingSize: (req, res) => {
    const { categoria_id, tamanho } = req.body;
    Category.getById(categoria_id, (err, category) => {
      if (err) {
        res.status(500).json({ error: 'Erro ao buscar a categoria no banco de dados.' });
      } else if (category.length === 0) {
        res.status(404).json({ error: 'Categoria não encontrada.' });
      } else {
        const clothingSizeData = { categoria_id, tamanho };
        ClothingSize.createClothingSize(clothingSizeData, (error, result) => {
          if (error) {
            res.status(500).json({ error: 'Erro ao criar o tamanho no banco de dados.' });
          } else {
            res.status(201).json({ message: 'Tamanho de roupa criado com sucesso.', id: result.insertId });
          }
        });
      }
    });
  },
};

module.exports = clothingSizeController;
