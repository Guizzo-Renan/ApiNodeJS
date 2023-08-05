// app/controllers/productController.js
const Product = require('../models/product');

const productController = {
  getAllProducts: (req, res) => {
    Product.getAll((err, products) => {
      if (err) {
        res.status(500).json({ error: 'Erro ao buscar os produtos no banco de dados.' });
      } else {
        res.json(products);
      }
    });
  },

  getProductById: (req, res) => {
    const productId = req.params.id;
    Product.getById(productId, (err, product) => {
      if (err) {
        res.status(500).json({ error: 'Erro ao buscar o produto no banco de dados.' });
      } else if (product.length === 0) {
        res.status(404).json({ error: 'Produto não encontrado.' });
      } else {
        res.json(product[0]);
      }
    });
  },

  createProduct: (req, res) => {
    const productData = req.body;
    Product.create(productData, (err, result) => {
      if (err) {
        res.status(500).json({ error: 'Erro ao criar o produto no banco de dados.' });
      } else {
        res.status(201).json({ message: 'Produto criado com sucesso.', id: result.insertId });
      }
    });
  },

  updateProduct: (req, res) => {
    const productId = req.params.id;
    const productData = req.body;
    Product.update(productId, productData, (err) => {
      if (err) {
        res.status(500).json({ error: 'Erro ao atualizar o produto no banco de dados.' });
      } else {
        res.json({ message: 'Produto atualizado com sucesso.' });
      }
    });
  },

  deleteProduct: (req, res) => {
    const productId = req.params.id;
    Product.delete(productId, (err) => {
      if (err) {
        res.status(500).json({ error: 'Erro ao excluir o produto do banco de dados.' });
      } else {
        res.json({ message: 'Produto excluído com sucesso.' });
      }
    });
  },
};

module.exports = productController;

/*
// app/controllers/productController.js
const Product = require('../models/product');

const productController = {
  getAllProducts: (req, res) => {
    const { categoria, precoMin, precoMax } = req.query;

    Product.getAllProducts((err, products) => {
      if (err) {
        res.status(500).json({ error: 'Erro ao buscar os produtos no banco de dados.' });
      } else {
        let filteredProducts = products;

        if (categoria) {
          filteredProducts = filteredProducts.filter((product) => product.categoria.toLowerCase() === categoria.toLowerCase());
        }

        if (precoMin) {
          filteredProducts = filteredProducts.filter((product) => product.preco >= parseFloat(precoMin));
        }

        if (precoMax) {
          filteredProducts = filteredProducts.filter((product) => product.preco <= parseFloat(precoMax));
        }

        res.json(filteredProducts);
      }
    });
  },

  // ... outros métodos do controlador ...
};

module.exports = productController;
*/