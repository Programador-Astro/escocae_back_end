
var express = require('express');
var router = express.Router();
var ValidationCreateUser = require('./src/ValidationsCreateUser.js');
router.put('/', (req, res)=>{
    const { nome,sobrenome, email, empresa, senha } = req.body; 
    console.log( nome, email, senha)
    try{
        new ValidationCreateUser(nome,sobrenome, email, empresa, senha);
        res.status(200).send("done");
    } catch(error){
        console.log(req.body);
        res.status(400).send(error.message);
    }
});
module.exports = router;
