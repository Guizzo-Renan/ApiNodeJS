// app/middlewares/authMiddleware.js
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ error: 'Token de autenticação não fornecido.' });
  }

  jwt.verify(token, 'chave-secreta-do-jwt', (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Token de autenticação inválido.' });
    }

    req.userId = decoded.id;
    next();
  });
};

module.exports = authMiddleware;
