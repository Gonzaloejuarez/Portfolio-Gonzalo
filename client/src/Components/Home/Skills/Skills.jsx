import React from "react";
import style from './Skills.module.css'
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
    <div className={style.div_skill}>
        <section id="Skills" className={style.section}>
            <div>
            <h1 className={style.h1_about}>Skills</h1>
            <div className={style.skills_div}>
                <img className={style.imagenLen} src={js} alt="" />
                <img className={style.imagenLen} src={html} alt="" />
                <img className={style.imagenLen} src={css} alt="" />
                <img className={style.imagenLen} src={git} alt="" />
                <img className={style.imagenLen} src={sass} alt="" />
                <img className={style.imagenLen} src={redux}alt="" />
                <img className={style.imagenLen} src={react} alt="" />
                <img className={style.imagenLen} src={postgres} alt="" />
            </div>
            </div>
        </section>
    </div>
)
}
export default Skills