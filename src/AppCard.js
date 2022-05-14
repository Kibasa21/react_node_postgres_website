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
                    nome={filme.nome}
                    categoria={filme.categoria}
                    classificacao={filme.classificacao}
                    duracao={filme.duracao}
                    id={type}
                />
            </div>
            <Footer/>
        </div>
    )
}