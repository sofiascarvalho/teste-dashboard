const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let alunos = [];

app.post('/alunos', (req, res) => {
  alunos.push(req.body);
  res.status(201).send({ message: 'Dados salvos!' });
});

app.get('/alunos', (req, res) => {
  res.json(alunos);
});

app.listen(3001, () => console.log('Back-end rodando na porta 3001'));
