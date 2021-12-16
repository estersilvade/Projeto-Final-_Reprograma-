const mongoose = require('mongoose')

const avaliacaoSchema = new mongoose.Schema({
  id:mongoose.Schema.Types.ObjectId,
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
  },
  usuarioId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require :true
  }

})
 const Commit = mongoose.model('Commit', avaliacaoSchema)
 module.exports = Commit