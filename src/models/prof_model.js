const mongoose = require('mongoose') 

const servicoScherma = new mongoose.Schema({
  id:mongoose.Schema.Types.ObjectId,
  Atividade:{
    type: String,
    required:true
  },
  diaria:{
    type: Boolean,
    required:true
  },
  hora :{
    type: Boolean,
    required:true
  },
  Valor:{
    type: Number,
    min: 0
  },
  agendarData:{
    type:Date,
    required:true
  },
  agendarHorario:{
    type:Number,
    required:true

  },
  idUser:{
    type: mongoose.Schema.Types.ObjectId,
    required: true ,
    ref: 'user'
},

})
const Prof = mongoose.model('prof',servicoScherma)

module.exports = Prof