const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost', /*localhost posta 3306 */
  user: 'root', /*seu_usuario */
  password: 'Aa@56e7f2a698', /*sua_senha */
  database: 'EcommerceBanco', /*nome_do_banco_de_dados */
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conexão com o banco de dados estabelecida!');
  }
});

module.exports = connection;