// index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config/db');

const app = express();
const port = 3000; // ou a porta que desejar

app.use(bodyParser.json());
app.use(cors());

//const authMiddleware = require('./app/middlewares/authMiddleware');
//app.use(authMiddleware);

// Rotas
app.use('/api/produtos', require('./app/routes/products'));
app.use('/api/estoque', require('./app/routes/stock'));
app.use('/api/login', require('./app/routes/login'));

//app.use('/api/compras', require('./app/routes/purchases'));

app.use('/api/produtos/extenso', require('./app/routes/extendedProduct'));
app.use('/api/categorias', require('./app/routes/categories'));
app.use('/api/tamanhos-roupa', require('./app/routes/clothingSizes'));


app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});