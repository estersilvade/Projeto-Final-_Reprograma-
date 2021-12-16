const express = require('express')

const router = express.Router()

const profcontroller = require('../controllers/prof_contro')


//@rout get '/' apresentação
//@dec Rota de teste com apresentação com
//@acc public

router.get('/teste', (req, res) => {
  res.status(200).json({
    massagen: "Não importa a sua Profição sempre tem um trabalho para você"
  })
})



module.exports = router