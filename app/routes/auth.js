// app/routes/auth.js
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user');

router.post('/login', (req, res) => {
  const { email, senha } = req.body;
  User.getUserByEmail(email, (err, user) => {
    if (err) {
      res.status(500).json({ error: 'Erro ao buscar o usuário no banco de dados.' });
    } else if (user.length === 0) {
      res.status(401).json({ error: 'Usuário não encontrado.' });
    } else {
      const hash = user[0].senha;
      bcrypt.compare(senha, hash, (bcryptErr, isMatch) => {
        if (bcryptErr || !isMatch) {
          res.status(401).json({ error: 'Credenciais inválidas.' });
        } else {
          const token = jwt.sign({ id: user[0].id, email: user[0].email }, 'chave-secreta-do-jwt', {
            expiresIn: '1h', // Defina o tempo de expiração do token, por exemplo, '1h', '1d', '30d', etc.
          });
          res.json({ token });
        }
      });
    }
  });
});

module.exports = router;