const express = require('express');
const {cadastrarPrato, listarPrato, addPedido, updatePrato } = require('./controller/cardapio');
const rotas = express();

rotas.post('/prato/cadastro',cadastrarPrato);
rotas.get('/listar/pratos',listarPrato);
rotas.post('/adicionar/pedidos', addPedido);
rotas.put('/atualizar/pratos',updatePrato)
module.exports = {
  rotas
}