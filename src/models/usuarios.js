const mongoose = require('mongoose')

const usuariosSchema = new mongoose.Schema({
   id:mongoose.Schema.Types.ObjectId,
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
   idade :{
     type: Number,
     require :true
   },
   genero :{
     type: String,
     require :true
   },
  prestadorDeServico:{
    type :Boolean ,
    require :true
   },
  tipoDeServico: {
    type : String,
    require :true
   },
   pagamento :{
     type: String,
     require :true
   },

    

},{timestamps: true})

const User = mongoose.model('User',usuariosSchema)

module.exports = User