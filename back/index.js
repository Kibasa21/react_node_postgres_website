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


const client = new Client({
    user: "postgres",
    password: "postgres",
    host: "database-2.cqykstfvwwut.us-east-1.rds.amazonaws.com",
    port: 5432,
    database: "loja"
})

client.connect()
  .catch(e => {
    console.log(e);
    process.exit(e);
  })

//pega os filmes do banco de dados e retorna uma lista de objetos json
function getFilmes(){
    /*
    return [{
        id: "0",
        nome: "DeadPool",
        categoria: "acao",
        classificacao: "18",
        duracao: "200"
    }]
    */

    const sql = `SELECT * FROM mydb.evento`
    
    client.query(sql)
    .then(res =>{
        let lista = []
        for (let row of res.rows) {
            lista.push(row);
        }
        console.log(lista)
        return lista
    })
    .catch(e => {console.error(e)})
    
    
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

getFilmes()
