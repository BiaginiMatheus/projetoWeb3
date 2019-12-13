const express = require("express");
const Postagem = require("../models/postagem");
const router = express.Router();



//passando para outras telas
router.get('/', (req, res) => {    
    Postagem.find({texto: new RegExp(req.body.search)}).then((itens) => {
        res.render('index', {questions: itens});
    }).catch((err) => {
        cconsole.log('Erro ao carregar do Banco de Dados')
    })
})

//Projeto 3
router.post('/pesquisa', (req, res) => {
  console.log('Pesquisa');
  Postagem.find({texto: new RegExp(req.body.search)}).then((items) => {
      res.end(JSON.stringify(items));
    }).catch((err) => {
      console.log('Erro ao carregar as duvidas')
    }) 
});

router.post('/publica', (req, res) => {
  if (req.body.titulo_publica == ''){
    console.log("Campo Vazio");
  }
  else{
    let newPost = new Postagem({
      texto: req.body.titulo_publica.trim(),
    });
    newPost.save().then(user => {    
      console.log('Questao registrada')
      res.end(JSON.stringify(user));
    });  
  }
});

router.get('/musicas', (req, res) => {
  console.log('Periodic Refresh');
  Postagem.find({texto: new RegExp(req.body.search)}).then((items) => {
    res.end(JSON.stringify(items));
  }).catch((err) => {
    console.log('A atualizacao periodica falhou')
  }) 
});

module.exports = router