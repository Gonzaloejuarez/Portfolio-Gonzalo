import React from "react";
import foto from '../../image/GonzaloJuarez.jpeg';
import style from './Home.module.css'
export const Home = () => {
    return(
        <div className={style.div_home}>
        <section id="Inicio" className={style.section_home}>
            <div className={style.Todo_Container}>
                <div className={style.Home_Content_grid}>
                <div className={style.Foto2}>
                    <img className ={style.foto} src={foto}/>
                </div>
                <div className={style.ladoB}>
                <h1>Hola, soy Gonzalo</h1>
                <h2>Desarrollador Front-End</h2>
                {/* <p>Desarrollador web en JavaScript</p> */}
                <div class={style.about__info}>
                    <div class={style.about__buttons}>
                        <a href="#Contactame" className={style.button}> Contactame</a>
                    </div>
                </div>
                </div>
                </div>
              
            </div>
        </section>
        </div>
    )
}
export default Home