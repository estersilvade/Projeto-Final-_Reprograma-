const mongoose = require('mongoose')

const UsuariosSchema = new mongoose.schema({
   nome :{
     type: String,
     require :true
   },
   email :{
     type: String,
     unique :true,
     require :true
   },
   password :{
     type: String,
     require :true
   },
  prestadorDEServico:{
    taype :Boolean ,
    require :true
   },
   pagament :{
     taype: String,
     require :true
   },

    

},{timestamps: true})

const User = mongoose.model('User',UsuariosSchema)

module.exports = User