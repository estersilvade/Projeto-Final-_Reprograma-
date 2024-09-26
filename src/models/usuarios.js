const mongoose = require('mongoose')

const usuariosSchema = new mongoose.Schema(
  {
    id: mongoose.Schema.Types.ObjectId,
    nome: {
      type: String,
      require: true
    },
    email: {
      type: String,
      unique: true,
      require: true
    },
    password: {
      type: String,
      require: true
    },
    idade: {
      type: Number,
      require: true
    },
    genero: {
      type: String,
      require: true
    },
    prestadorDeServico: {
      type: Boolean,
      require: true
    },
    pagamento: {
      type: String,
      require: true
    },
    bairro: {
      type: String,
      unique: true,
      require: true
    },
    profissaoRefId: {
      type:mongoose.Schema.Types.ObjectId,
      require:true,
      ref: "profissao"
      
    }
  },
  { timestamps: true }
)

const User = mongoose.model('user', usuariosSchema)

module.exports = User
