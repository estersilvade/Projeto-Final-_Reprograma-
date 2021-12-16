const express = require('express')

const router = express.Router()

const userController = require('../controllers/user')

//@ router Get' /' Apresentação 
//@dec Rota de teste com apresentação com
//@acc public

router.get('/', (req, res) => res.status(200).json({
  mensage: "Helpe Visinhos "
})) 

//@ route Get /All
//@dec Lista de usuários 
//@access public
router.get('/all', userController.getAll)

//@route Post /register
//@dec Registro de usuários
//@access public
router.post('/register', userController.register)

//@ route Post /logi
//@dec Registro de usuários
//@access public
router.post('/login', userController.login)

//@route DElete /Id
//@route deleta usuários
//@rout privada 
router.delete('/delete/:id', userController.deleteItem)

//@route update / id
//@route update usuários
//@rout privada 
router.patch('/atualizar', userController.updateUser)


module.exports = router