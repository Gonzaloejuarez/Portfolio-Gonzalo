import React from "react"
import "./Skills.scss"
import js from '../../../image/lenguajes/js.png';
import html from '../../../image/lenguajes/html-5.png'
import css from '../../../image/lenguajes/css-3.png'
import git from '../../../image/lenguajes/node-js.png'
import sass from '../../../image/lenguajes/sass.png';
import redux from '../../../image/lenguajes/Redux.png';
import react from '../../../image/lenguajes/reactbueno.png'
export const Skills = () => {
return(
    <div className="div_about">
        <section id="Skills" className="section">
            <div>
                <h1 className="h1_about">Skills</h1>
                <img src={js} alt="" />
                <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={git} alt="" />
                <img src={sass} alt="" />
                <img src={redux}alt="" />
                <img src={react} alt="" />
                <img src="" alt="" />
            </div>
        </section>
    </div>
)
}
export default Skills