import React from "react"
import { Link } from "react-router-dom";
import pic from "../images/empty.png"

export default function Card(props){
    /*
    let foto;
    switch(props["classificacao"]){
        case "L":
            foto = c00;
            break;
        case "10":
            foto = c10;
            break;
        case "12":
            foto = c12;
            break;
        case "14":
            foto = c14;
            break;
        case "16":
            foto = c16;
            break;
        case "18":
            foto = c18;
            break;
        default:
            foto = pic;
            break;
    }
    */

    let fotoEvento;
    if(props[img] == null){
        fotoEvento = pic
    }

    let foto

    return(
        <div className="movie">
            <img src={pic} alt=""/>
            <h3>{props.titulo}</h3>
            <div className="info-group">
                <p>Genero: {props.categoria}</p>
            </div>

            <div className="info-group">
                <p>Classificacao indicativa</p>
                <img src={foto} alt=""/>
            </div>

            <div className="info-group">
                <p>Data: {props.data}</p>
            </div>

            <div className="info-button">
                <Link to={{
                    pathname: `/AppCard/${props["id"]}`, 
                    state: {stateParam: true} 
                }}
                ><button>Comprar</button></Link>
            </div>
            
        </div>
    )
}
