const express = require('express');
const {cadastrarPrato, listarPrato } = require('./controller/cardapio');
const rotas = express();

rotas.post('/cadastro',cadastrarPrato)
rotas.get('/pratos',listarPrato)

module.exports = {
  rotas
}