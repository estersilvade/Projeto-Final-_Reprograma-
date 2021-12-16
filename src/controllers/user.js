const User = require('../models/usuarios')

const{ hashPassWord} = require('../helpers/auth')

const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken')

// lista  de usuarios para
const getAll = async (req, res) => {
  try {
    const users = await User.find()
    res.status(200).json({
      message:"Lista de pessas",users
    })
  }catch (error) {
    res.status(500).json({
     menssage: error.message 
    })

  }
}

//registro de usuarios 

const register = async (req, res) => {
   const { nome, email , password , idade, tipoDeServico , pagamento, genero, prestadorDeServico } = req. body
   try{
     const newUser = new User({
      nome,
      email, 
      password, 
      idade,
      tipoDeServico,
      pagamento,
      genero,
      prestadorDeServico
     })
     const passwordHashed = await hashPassWord(newUser.password,res )
     newUser.password = passwordHashed
     
     const saveUser = await newUser.save()
     res.status(201).json({
       message:"Usuário cadastrada com sucesso",
       saveUser
     })

}catch (error) {
  res.satus(500).json({
    message:error.message 
  })

}
}


// criar login para receber o token 
const login = async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.findOne({email : email})

    if (!user) { res.status(422).json({ message: "Email não encontrado!"})
  }
  const checkPassword = await bcrypt.compare(password, user.password)
  if (!checkPassword) {
    return res.status(422).send({ message: "Senha incorreta!" })
    }
    const secret = process.env.SECRET
    const token = jwt.sign({ id: user._id }, secret)
      return res.status(200).json({
      message: "Senha Acho que foi " ,
      token
    })

  }catch(error){
    res.status(500).json({
      message: error.message
    })
  }  
  
}

// Delete de usuarios
const deleteItem = async (req, res ) => {
 
  try{
    const users = await User.findByIdAndDelete(req.params.id)
    res.status(200).json({
      message: "Usuário deletado com suscesso",users
    })

  }catch (error) {
    res.status(200).json({
      messagen: error.message
    })
  }
}


//update altera informaçoes 
 const update = async (req, res) => {
   
  try{
    const alterarDados = await User.findById(req.params.id)
    const {nome, email , password , idade, tipoDeServico , pagamento, genero, prestadorDeServico}= req.body
    alterarDados.nome = nome || alterarDados.nome
    alterarDados.email = email|| alterarDados.email
    alterarDados.password = password || alterarDados.password
    alterarDados.idade= idade || alterarDados.idade
    alterarDados.tipoDeServico = tipoDeServico || alterarDados.tipoDeServico
    alterarDados.pagamento = pagamento || alterarDados.pagamento
    alterarDados.genero = genero || alterarDados.genero
    alterarDados.prestadorDeServico = prestadorDeServico || alterarDados.prestadorDeServico
  
    const dadosAlterados = await alterarDados.save()
    return res.status(200).json({
      message: "Dados Atualuzados com sucesso", dadosAlterados
    })
  
  }catch (error) {
    res.status(500).json({
      mensagem: error.mensage
    })
  }
 }






module.exports = {
  getAll,
  register,
  login,
  deleteItem,
  update
  
}