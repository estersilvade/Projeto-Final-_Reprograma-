const User = require('../models/usuarios')

const{ hashPassWord} = require('../helpers/auth')

const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken')

// lista  de usuarios para
const getAll = async (req, res) => {
  try {
    const users = await User.find()
    res.status(200).json({
      mensagem: "Lista  de Cadastro ", users
    })
  }catch (error) {
    res.status(500).json({
     mensagem:error.message 
    })

  }
}

module.exports ={
  getAll
}