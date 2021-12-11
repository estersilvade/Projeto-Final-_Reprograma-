const express = require('express')

const cors = require('cors')

const dotenv = require('dotenv')

const app = express()

const database = require('./database/configMong')

app.use(cors())

app.use(express.json())

dotenv.config()

// rota de teste 
app.get('/',(req, res) => {
  res.status(200).json({
    mensagem: "Esta acabando, fé no pai que agora vai!! "
  })
})

database. connect()
module.exports = app