const express = require('express')

const router = express.Router()

const profController = require('../controllers/prof_contro')


//@rout get '/' apresentação
//@dec Rota de teste com apresentação com
//@acc public

router.get('/', (req, res) => {
  res.status(200).json({
    message:"Helpe Vizinhos API para conectar pessoas prestadores de serviços  e solicitantes  da mesma região."
   })

})


//@rout get '//criar' atividade
//@dec Rota de teste com apresentação com
//@acc privada 
router.post('/criar', profController.criar)


//@rout get '/excluir/:id' Excuir atividade 
//@dec Rota para excluir
//@acc privada 
router.delete('/excluir/:id', profController.excluir)



//@rout get '/lista' apresentação
//@dec lista de profissao
//@acc public
router.get('/lista/:', profController.lista)

module.exports = router