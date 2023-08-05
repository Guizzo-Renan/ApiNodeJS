// app/controllers/stockController.js
const Stock = require('../models/stock');

const stockController = {
  getStockByProductId: (req, res) => {
    const productId = req.params.id;
    Stock.getStockByProductId(productId, (err, stock) => {
      if (err) {
        res.status(500).json({ error: 'Erro ao buscar o estoque no banco de dados.' });
      } else if (stock.length === 0) {
        res.status(404).json({ error: 'Estoque não encontrado para o produto.' });
      } else {
        res.json(stock[0]);
      }
    });
  },

  updateStockByProductId: (req, res) => {
    const productId = req.params.id;
    const newQuantity = req.body.quantidade;
    Stock.updateStockByProductId(productId, newQuantity, (err) => {
      if (err) {
        res.status(500).json({ error: 'Erro ao atualizar o estoque no banco de dados.' });
      } else {
        res.json({ message: 'Estoque atualizado com sucesso.' });
      }
    });
  },

  createStock: (req, res) => {
    const stockData = req.body;
    Stock.createStock(stockData, (err, result) => {
      if (err) {
        res.status(500).json({ error: 'Erro ao criar o estoque no banco de dados.' });
      } else {
        res.status(201).json({ message: 'Estoque criado com sucesso.', id: result.insertId });
      }
    });
  },
};

module.exports = stockController;
