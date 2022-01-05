import React from "react"
import './AboutMe.scss'
import cv from '../../utils/Gonzalo Juarez.pdf'
export const AboutMe = () => {
    return(
        <div className="div_about">
        <section id="SobreMi" className="section_about">
            <div>
                <h1 className="h1_about">
                    Sobre Mi
                </h1>
                <div className="about_me">
                <p className="about_me_description">
                Me llamo Gonzalo tengo 19 años, Soy de Argentina,Buenos Aires.<br/>
                Soy un Desarrollador Front-End y Tecnico informatico. Me gradue en la academia SoyHenry en la cual aprendi las tecnologias
                JavaScript, React, Redux, Express, Sequalize, NodeJs y PostgreSQL. Con mas de 1000 horas de codigo en un total de 5 meses. 🚀 🚀
                </p>
                <div class="about__info">
                    <div class="about__buttons">
                        <a download="" href={cv} class="button button--flex">Descargar CV</a>
                    </div>
                </div>
                </div>
            </div>
        </section>
        </div>
    )
}
export default AboutMe