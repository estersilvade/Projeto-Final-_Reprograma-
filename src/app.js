require('dotenv').config()

const express = require('express')

const cors = require('cors')

const database = require('./database/configMong')

const User = require('./routes/route')

const Prof = require('./routes/prof_route')

const app = express()

database.connect()

app.use(cors())

app.use(express.json())


// rota de teste 
//app.use('/', User)

 //rota teste server
 //app.use('/prof', Prof)
app.get('/',  (req, res) => res.status(200).send ("oi") )

module.exports = app