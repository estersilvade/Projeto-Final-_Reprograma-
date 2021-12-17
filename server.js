const app = require('./src/app')

const port = process.env.PORT || 8084

app.listen(port, () => console.log(`Abrindo os caminhos na sua vida porta ${port}`))
