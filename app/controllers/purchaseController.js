// app/controllers/purchaseController.js
const Product = require('../models/product');
const Purchase = require('../models/purchase');

const purchaseController = {
  createPurchase: (req, res) => {
    const { usuario_id, produto_id, quantidade } = req.body;
    Product.getById(produto_id, (err, product) => {
      if (err) {
        res.status(500).json({ error: 'Erro ao buscar o produto no banco de dados.' });
      } else if (product.length === 0) {
        res.status(404).json({ error: 'Produto não encontrado.' });
      } else {
        const valor_total = product[0].preco * quantidade;
        const data_compra = new Date().toISOString().slice(0, 10);
        const purchaseData = { usuario_id, produto_id, quantidade, valor_total, data_compra };
        Purchase.createPurchase(purchaseData, (error, result) => {
          if (error) {
            res.status(500).json({ error: 'Erro ao criar a compra no banco de dados.' });
          } else {
            res.status(201).json({ message: 'Compra realizada com sucesso.', id: result.insertId });
          }
        });
      }
    });
  },

  getAllPurchasesByUser: (req, res) => {
    const userId = req.params.id;
    Purchase.getAllPurchasesByUser(userId, (err, purchases) => {
      if (err) {
        res.status(500).json({ error: 'Erro ao buscar as compras no banco de dados.' });
      } else {
        res.json(purchases);
      }
    });
  },
};

module.exports = purchaseController;