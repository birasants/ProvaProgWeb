const pool = require('../database/conexao')

const cadastrarPrato = async (req,res)=>{
  const {nome, ingredientes, tipo_de_prato} = req.body;

  try {
    const cadastro = await pool.query(`
    insert into prato (nome,ingredientes,tipo_de_prato)
    values($1,$2,$3) returning*
    `,[nome,ingredientes,tipo_de_prato]);

    
    return res.status(200).json(cadastro.rows[0]);
  } catch (error) {
    console.log(error);
    return res.status(500).json({mensagem:'Erro interno do servidor'})
  }
}

const listarPrato = async (req,res)=>{
  
  try {
    const {rows}= await pool.query(`
    select * from prato
    `)
    return res.status(200).json(rows)
  } catch (error) {
    return res.status(500).json({mensagem: 'Erro interno do servidor!'})
  }
}

module.exports = {
  cadastrarPrato,
  listarPrato
}