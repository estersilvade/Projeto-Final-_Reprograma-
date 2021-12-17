const mongoose = require('mongoose')

const servicoScherma = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  atividade: {
    type: String,
    required: true
  },
  diaria: {
    type: Boolean,
    required: true
  },
  hora: {
    type: Boolean,
    required: true
  },
  Valor: {
    type: Number,
    min: 0
  },
  agendarData: {
    type: Date,
    required: true
  },
  agendarHorario: {
    type: Number,
    required: true
  }
})
const Prof = mongoose.model('profissao', servicoScherma)

module.exports = Prof
