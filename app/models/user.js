const db = require('../../config/db');

const User = {
  getByEmail: (email, callback) => {
    db.query('SELECT * FROM usuarios WHERE email = ?', [email], callback);
  },

  createUser: (userData, callback) => {
    db.query('INSERT INTO usuarios SET ?', [userData], callback);
  },
};

module.exports = User;