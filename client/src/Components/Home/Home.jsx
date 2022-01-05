import React from "react";
import NavBar from "../Navbar/Navbar";
import foto from '../../image/GonzaloJuarez.jpeg';
import './Home.scss'
export const Home = () => {
    return(
        <div className="div_home">
        <section id="Inicio" className="section_home">
            <div className="Todo Container">
                <div className="Home_Content grid">
                <div className="Foto2">
                    <img className ="foto" src={foto}/>
                </div>
                <div className="ladoB">
                <h1>Hola, soy Gonzalo</h1>
                <h2>Desarrollador Front-End</h2>
                </div>
                </div>
              
            </div>
        </section>
        </div>
    )
}
export default Home