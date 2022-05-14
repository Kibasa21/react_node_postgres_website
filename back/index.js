const express = require('express')
const cors = require('cors')
var app = express()
const { Client } = require('pg')

app.use(cors())
app.use(express.json());

const config = {
    port: 8080
}

//////////////////////////////////////////
//parte para o banco de dados:
/*
tem q colocar os novos dados
const client = new Client({
    user: "postgres",
    password: "postgres",
    host: "database-2.c52knlbcjuc1.us-east-1.rds.amazonaws.com",
    port: 5432,
    database: "loja"
})

client.connect()
  .catch(e => {
    console.log(e);
    process.exit(e);
  })
*/
//pega os filmes do banco de dados e retorna uma lista de objetos json
function getFilmes(){
    return [{
        id: "0",
        nome: "DeadPool",
        categoria: "acao",
        classificacao: "18",
        duracao: "200"
    },
    {
        id: "1",
        nome: "Ta dando onda",
        categoria: "comedia",
        classificacao: "L",
        duracao: "160"
    },
    {
        id: "2",
        nome: "Emoji o filme",
        categoria: "infantil",
        classificacao: "L",
        duracao: "210"
    },
    {
        id: "3",
        nome: "Senhor dos Aneis",
        categoria: "Acao",
        classificacao: "16",
        duracao: "500"
    },
    {
        id: "4",
        nome: "Os incriveis",
        categoria: "infantil",
        classificacao: "L",
        duracao: "120"
    },
    {
        id: "5",
        nome: "Os simpsons",
        categoria: "humor",
        classificacao: "12",
        duracao: "300"
    }
    ]
}
//fim da parte para o banco de dados
//////////////////////////////////////////




//para enviar json so colocar res.json()
app.get('/filmes', (req, res) => {
    res.send(getFilmes());
});


app.listen(config.port, () => console.log(`
ouvindo porta ${config.port}
root em: http://127.0.0.1:${config.port}/
ou em: http://localhost:${config.port}/
`))

