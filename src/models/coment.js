const mongoose = require('mongoose')

const avaliacaoSchema = new mongoose.Schema({
  comentario:{
    type:String,
    unique:true,
    require :true
  },
  avaliação:{
    type:Number,
    unique:true,
     max:1,
     require :true
  }

})
 const Comit = mongoose.model('Comit', avaliacaoSchema)
 module.exports = Comit