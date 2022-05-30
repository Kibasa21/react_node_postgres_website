import React from "react"
import ReactDOM from "react-dom"
import App from "./App.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"
import {BrowserRouter,Routes,Route} from "react-router-dom";
import AppCard from "./AppCard.js"
import Adm from './Adm'


ReactDOM.render(
    <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/AppCard/:type" element={<AppCard />} />
        <Route path="/adm" element={<Adm />}/>
    </Routes>
    </BrowserRouter>,
    document.getElementById("root")
)