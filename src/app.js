require('dotenv').config()

const express = require('express')

const cors = require('cors')

const database = require('./database/configMong')

const User = require('./routes/rotas')
const Prof = require('./routes/prof_routa')

const app = express()

database.connect()

app.use(cors())

app.use(express.json())


// rota de teste 
app.use('/', User)

 //rota teste server
 app.use('/prof', Prof)


module.exports = app