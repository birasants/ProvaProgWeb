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

const addPedido = async (req,res)=>{
  const {id_pedido} = req.body
  try {
    const pedido = await pool.query(`
    insert into pedido (prato)
    values($1) returning*`,[id_pedido]);
    return res.status(201).json(pedido.rows[0]);
  } catch (error) { 
    console.log(error);
    return res.status(500).json({mensagem: 'Erro interno do servidor!'});
  }
}

const listarPedido = async (req,res)=>{
  const {prato_id} = req.params
  try {
    const pedidoRealizado = await pool.query(`
  select pedido.*, prato.nome as nome_do_prato
  from prato
  inner join pedido on prato_id = pedido.prato_id
  where prato.id = $1
  `,[prato_id])
  return res.status(200).json(pedidoRealizado.rows[0])
  } catch (error) {
    return res.status(500).json({mensagem: 'Erro interno do servidor!'});
  }
  
}

const updatePrato = async (req,res)=>{
  const {id_prato,nome,ingredientes,tipo_de_prato} = req.body
  try {
    const atualizar = await pool.query(`
    UPDATE prato
    SET nome = $1, ingredientes = $2, tipo_de_prato = $3
    WHERE id = $4
    RETURNING *;`,[nome,ingredientes,tipo_de_prato,id_prato]);
    return res.status(200).json(atualizar.rows[0])
  } catch (error) {
    return res.status(500).json({mensagem: 'Erro interno do servidor!'});
  }
}

const deletarPrato = async (req,res)=>{
    const {id} = req.params;
    try {
      const deletePrato = await pool.query(`
        delete from prato
        where id = $1
      returning *`,[id])
      return res.status(200).json(deletePrato.rows[0]);
    } catch (error) {
      console.log(error);
      return res.status(500).json({mensagem: 'Erro interno do servidor!'});
    }
}
module.exports = {
  cadastrarPrato,
  listarPrato,
  addPedido,
  updatePrato,
  deletarPrato,
  listarPedido
}