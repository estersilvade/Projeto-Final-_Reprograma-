const express = require('express')

const router = express.Router()

const profController = require('../controllers/prof_contro')


//@rout get '/' apresentação
//@dec Rota de teste com apresentação com
//@acc public

router.get('/prof', (req, res) => {
  res.status(200).json({
    massagen: "Não importa a sua Profição sempre tem um trabalho para você"
  })
})


//@rout get '//criar' apresentação
//@dec Rota de teste com apresentação com
//@acc public
router.post('/criar', profController.criar)

router.delete('/excluir/:id', profController.excluir)



//@rout get '/lista' apresentação
//@dec Rota de teste com apresentação com
//@acc public
router.get('/lista/:id', profController.lista)

module.exports = router