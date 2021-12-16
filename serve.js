const mongoose = require('mongoose')
/**
 * serviço 
 * diaria 
 * hora
 * valor 
 * 
 */
const profiSchema = new mongoose.Schema
({ 
  id: mongoose.Schema.Types.ObjectId,
  servico :{
    type: String,
    require :true
  },
  diaria:{
    type: Boolean,
    unique: true,
    require :true
  },
  hora: {
    type:Boolean,
    unique: true,
    require :true
  },
  valor: {
    type: Number,
    unique: false,
    require :true

  }

})
const PROF = mongoose.model('PROF',profiSchema)

module.exports = PROF