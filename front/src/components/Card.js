import React from "react"
import { Link } from "react-router-dom";
import pic from "../images/empty.png"

export default function Card(props){
    

    let fotoEvento;
    if(props["img"] == null){
        fotoEvento = pic
    }

    return(
        <div className="movie">
            <img src={fotoEvento} alt=""/>
            <h3>{props.nome}</h3>
            <div className="info-group">
                <p>Tipo de evento: {props.categoria}</p>
            </div>

            <div className="info-group">
                <p>Data: {props.datas}</p>
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
