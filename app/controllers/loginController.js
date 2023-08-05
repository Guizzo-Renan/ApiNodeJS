// app/controllers/loginController.js
const bcrypt = require('bcrypt');
const User = require('../models/user');

const loginController = {
  login: (req, res) => {
    const { email, senha } = req.body;
    User.getByEmail(email, (err, user) => {
      if (err) {
        res.status(500).json({ error: 'Erro ao buscar o usuário no banco de dados.' });
      } else if (user.length === 0) {
        res.status(401).json({ error: 'Credenciais inválidas.' });
      } else {
        const hashedPassword = user[0].senha;
        bcrypt.compare(senha, hashedPassword, (error, result) => {
          if (error) {
            res.status(500).json({ error: 'Erro ao verificar a senha.' });
          } else if (!result) {
            res.status(401).json({ error: 'Credenciais inválidas.' });
          } else {
            // Autenticação bem-sucedida, você pode gerar um token JWT aqui se desejar.
            res.json({ message: 'Autenticação bem-sucedida.' });
          }
        });
      }
    });
  },

  register: (req, res) => {
    const { nome, email, senha } = req.body;
    bcrypt.hash(senha, 10, (err, hashedPassword) => {
      if (err) {
        res.status(500).json({ error: 'Erro ao criar a senha criptografada.' });
      } else {
        const userData = { nome, email, senha: hashedPassword };
        User.createUser(userData, (error, result) => {
          if (error) {
            res.status(500).json({ error: 'Erro ao criar o usuário no banco de dados.' });
          } else {
            res.status(201).json({ message: 'Usuário criado com sucesso.', id: result.insertId });
          }
        });
      }
    });
  },
};

module.exports = loginController;