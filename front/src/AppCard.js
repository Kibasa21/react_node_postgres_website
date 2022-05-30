import React from "react";
import Card from "./components/Card";
import Header from "./components/HeaderMain.js"
import Footer from "./components/Footer.js"
import { useParams } from "react-router-dom";
import dadosFilmes from "./data/films";
import dadosFilme from "./data/film";
import {useEffect, useState} from "react";

export default function AppCard(props){
    const {type} = useParams()

    let [filme, setFilmes] = useState([])
    useEffect(() => {
        dadosFilmes()
            .then((res) => { setFilmes(dadosFilme(res.data, type)) })
            .catch((err)=>{
                console.error("ERROOOU")
            })
    }, [])

    return(
        <div>
            <Header/>
            <div className="movies-container-AppCard">
            <Card
                nome={filme["titulo"]}
                categoria={filme["nome"]}
                datas={filme["datas"]}
                img={filme["img"]}
                id={filme["id"]}
            />
            </div>
            <Footer/>
            <div className="descricao-evento">
                <h1>Descrição:</h1>
                {filme.descricao}
            </div>
            
        </div>
    )
}