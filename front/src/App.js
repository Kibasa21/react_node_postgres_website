import React from "react"
import Header from "./components/HeaderMain.js"
import Footer from "./components/Footer.js"
import MainContent from "./components/MainContent.js"


export default function App(){
    return(
        <div>
            <Header/>
            <MainContent/>
            <Footer/>
        </div>
    )
}
