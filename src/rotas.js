const express = require('express');
const {cadastrarPrato, listarPrato, addPedido, updatePrato, deletarPrato } = require('./controller/cardapio');
const rotas = express();

rotas.post('/prato/cadastro',cadastrarPrato);
rotas.get('/listar/pratos',listarPrato);
rotas.post('/adicionar/pedidos', addPedido);
rotas.put('/atualizar/prato',updatePrato);
rotas.delete('/deletar/pratos/:id',deletarPrato);
module.exports = {
  rotas
}