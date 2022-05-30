const pool = require('../../db');
const queries = require('./queries')

const getFilmes = (req, res) =>{
    pool.query(queries.getEventosCategorias, (error, results) =>{
        if (error) throw error;
        res.status(200).send(results.rows)
    })
}

const addFilme = (req, res) =>{
    const { title, description } = req.body;
    console.log(title)
    console.log("descricao: "+ description)
    const id = Math.round(Math.random()*1000000)
    //adicionando evento ao db
    pool.query(queries.addFilme, [id, title, description], (error, results)=>{
        if(error) throw error;
        console.log("evento cadastrado")

        pool.query(queries.addCategoria, [id], (error2, results2)=>{
            if(error) throw error;
            res.status(201).send("evento cadastrado!")
            console.log("categoria do evento cadastada")
        })
    })
    
}

module.exports ={
    getFilmes,
    addFilme,
};