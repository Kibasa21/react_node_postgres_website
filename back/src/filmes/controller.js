const pool = require('../../db');
const queries = require('./queries')

const getFilmes = (req, res) =>{
    pool.query(queries.getEventosCategorias, (error, results) =>{
        if (error) throw error;
        res.status(200).send(results.rows)
    })
}

const addFilme = (req, res) =>{
    const { titulo, descricao } = req.body;
    const id = Math.round(Math.random()*1000000)
    //adicionando evento ao db
    pool.query(queries.addFilme, [id, titulo, descricao], (error, results)=>{
        if(error) throw error;
        res.status(201).send("evento cadastrado!")
        console.log("evento cadastrado")
    })
}

const teste = (req, res) =>{
    const {palavra} = req.body;
    console.log(palavra)
}

module.exports ={
    getFilmes,
    addFilme,
    
    teste
};