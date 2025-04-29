var express = require('express');
var router = express.Router();
var Usuario = require('../models/Usuario'); 


/* Pagina de login. */
router.post('/', async function(req, res) {
  try{
    const user = await Usuario.findOne({
      where:{
        email: req.body.email
      }
    });
    var resposta = "Usuario NÃO encontrado";
    if(user){
      console.log(user.id)
      id = user.id
      resposta = user;
    } 
    res.send(resposta);
  }
  catch (error) {
  console.error('Erro ao buscar usuário:', error);
  res.status(404).send('Erro a1o buscar usuário no banco de dados.');
}
});



module.exports = router;
/*
  var sequelize = require('../src/db/sequelize');
  origin: 'http://localhost:5500'
  const { email, senha } = req.body; // Assumindo que o frontend envia username e password
  console.log( email, senha)
  try {
    console.log('Dentro Try1')
    const usuarioEncontrado = await Usuario.findOne({
      where: {
        email: email
      }
    });
    
    
  } catch (error) {
    console.error('Erro ao tentar logar:', error);
    res.status(500).json({ message: 'Erro ao processar o login.' });
  }
*/