import React from "react"
import "./Skills.scss"
import js from '../../../image/lenguajes/js.png';
import html from '../../../image/lenguajes/html-5.png'
import css from '../../../image/lenguajes/css-3.png'
import git from '../../../image/lenguajes/node-js.png'
import sass from '../../../image/lenguajes/sass.png';
import redux from '../../../image/lenguajes/Redux.png';
import react from '../../../image/lenguajes/reactbueno.png';
import postgres from '../../../image/lenguajes/postgre.png';
export const Skills = () => {
return(
    <div className="div_about">
        <section id="Skills" className="section">
            <div>
            <h1 className="h1_about">Skills</h1>
            <div className="skills_div">
                <img className="imagenLen" src={js} alt="" />
                <img className="imagenLen" src={html} alt="" />
                <img className="imagenLen" src={css} alt="" />
                <img className="imagenLen" src={git} alt="" />
                <img className="imagenLen" src={sass} alt="" />
                <img className="imagenLen" src={redux}alt="" />
                <img className="imagenLen" src={react} alt="" />
                <img className="imagenLen" src={postgres} alt="" />
            </div>
            </div>
        </section>
    </div>
)
}
export default Skills