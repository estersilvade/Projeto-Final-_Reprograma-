const mongoose = require('mongoose') 

const servicoScherma = new mongoose.Schema({
  Atividade:{
    type: String,
    requere:true
  },
  diaria:{
    type: Boolean,
    requere:true
  },
  hora :{
    type: Boolean,
    requere:true
  },
  Valor:{
    type: Number,
    min: 0
  },
  agendarData:{
    type:Date,
    requere:true
  },
  agendarHorario:{
    type:Number,
    requere:true

  }
})
const Prof = mongoose.model('Prof',servicoScherma)

module.exports