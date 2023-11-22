const express = require('express');
const { rotas } = require('./rotas');
const app = express();

// Adicione isso antes de suas rotas
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5500'); // Substitua pelo seu domínio de frontend
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use(express.json());
app.listen(3000);
app.use(rotas);