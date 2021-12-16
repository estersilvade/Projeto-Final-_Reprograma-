require('dotenv').config()

const express = require('express')

const cors = require('cors')

const database = require('./database/configMong')

const User = require('./routes/rotas')

const app = express()

database.connect()

app.use(cors())

app.use(express.json())


// rota de teste 
app.use('/', User)


module.exports = app