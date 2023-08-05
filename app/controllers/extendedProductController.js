// app/controllers/extendedProductController.js
const Product = require('../models/product');
const ExtendedProduct = require('../models/extendedProduct');

const extendedProductController = {
  createExtendedProduct: (req, res) => {
    const { produto_id, descricao, url_imagem_principal, url_imagem_secundaria1, url_imagem_secundaria2, url_imagem_secundaria3, tipo_produto, nota_produto, especificacoes } = req.body;
    Product.getById(produto_id, (err, product) => {
      if (err) {
        res.status(500).json({ error: 'Erro ao buscar o produto no banco de dados.' });
      } else if (product.length === 0) {
        res.status(404).json({ error: 'Produto não encontrado.' });
      } else {
        const extendedProductData = { produto_id, descricao, url_imagem_principal, url_imagem_secundaria1, url_imagem_secundaria2, url_imagem_secundaria3, tipo_produto, nota_produto, especificacoes };
        ExtendedProduct.createExtendedProduct(extendedProductData, (error, result) => {
          if (error) {
            res.status(500).json({ error: 'Erro ao criar o produto estendido no banco de dados.' });
          } else {
            res.status(201).json({ message: 'Informações adicionais do produto criadas com sucesso.', id: result.insertId });
          }
        });
      }
    });
  },
};

module.exports = extendedProductController;