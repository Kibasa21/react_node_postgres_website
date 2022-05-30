const express = require('express')
const filmesRotas = require('./src/filmes/routes.js')
var app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json());
const config = {
    port: 8080
}

app.use('/api/v1/filmes', filmesRotas)

app.listen(config.port, () => console.log(`
ouvindo porta ${config.port}
root em: http://127.0.0.1:${config.port}/
ou em: http://localhost:${config.port}/
`))



