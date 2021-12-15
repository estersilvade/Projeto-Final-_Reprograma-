const express = require('express')

const router = express.Router()

const usercontroller = require('../controllers/user')

//@ router Get' /'
//@dec Rota de teste com apresentação com
//@acc public

router.get('/', (req, res) => res.status(200).json({
  mensage: "Helpe Visinhos "
})) 

//@ route Get /All
//@dec Lista de usuários 
//@access public
router.get('/all', usercontroller.getAll)

//@route Post /register
//@dec Registro de usuários
//@access public
router.post('/register', usercontroller.register)

//@ route Post /logi
//@dec Registro de usuários
//@access public
router.post('/login', usercontroller.login)

//@route DElete /Id
//@route deleta usuários
//@rout privada 
router.delete('/delete/:id', usercontroller.deleteItem)

//@route update / id
//@route update usuários
//@rout privada 
router.patch('/atualizar/:id', usercontroller.update)


module.exports = router