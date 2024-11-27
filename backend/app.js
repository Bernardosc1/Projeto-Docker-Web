const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();

const cors = require('cors');
app.use(cors());


// Middleware para processar JSON
app.use(bodyParser.json());

// Configuração do PostgreSQL
const port = 3000;

const pool = new Pool({
  user: 'root',
  host: 'db', // Host do banco de dados no Docker
  database: 'projeto',
  password: 'root1234',
  port: 5432,
});


// Rota para listar alunos
app.get('/v1/api/alunos', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM alunos');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao buscar alunos');
  }
});

// Rota para adicionar um aluno
app.post('/v1/api/alunos', async (req, res) => {
  const { nome, idade, curso } = req.body;

  if (!nome || !idade || !curso) {
    return res.status(400).send('Todos os campos são obrigatórios');
  }

  try {
    const result = await pool.query(
      'INSERT INTO alunos (nome, idade, curso) VALUES ($1, $2, $3) RETURNING *',
      [nome, idade, curso]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao adicionar aluno');
  }
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on PORT: ${port}`);
});
