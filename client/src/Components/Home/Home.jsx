import React from "react";
import NavBar from "../Navbar/Navbar";
import foto from '../../image/GonzaloJuarez.jpeg';
import './Home.scss'
export const Home = () => {
    return(
        <section id="Inicio" className="Home">
            <div className="Todo">
                <p>
                    Hola, Bienvenidos a mi pagina Web
                </p>
                <div className="Foto2">
                    <img className ="foto" src={foto}/>
                    <h1>Gonzalo Juarez</h1>
                </div>
            </div>
        </section>
    )
}
export default Home