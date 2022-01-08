import React from "react";
import "./Study.scss";
import style from './Study.module.css'
import henry from '../../../image/Henry.jfif';
import escuela from '../../../image/escuela.jpg'
export const Study = () => {
    return(
        <div className={style.div_study}>
        <section id="Estudio" className={style.section}>
            <div>
                <h1 className={style.h1_study}>Educacion</h1>
                <div className={style.estudio_cosas}>
                <div className={style.todo_estudio}> 
                <h1 className={style.h1_estudio2}>
                    <img src={henry} className={style.imagenSocial} alt="Henry" />
                Henry
                </h1>
                <p className={style.h1_parrafo}>
                    Abr 2021 - Sep 2021
                </p>
                </div>
                <div className={style.todo_estudio2}>
                <h1 className={style.h1_estudio2}>
                    <img className={style.imagenSocial} src={escuela} alt="Tecnica" />
                    Tecnico
                </h1>
                <p className={style.h1_parrafo}>
                    Mar 2014 - Dic 2020
                </p>
                </div>
                </div>

            </div>

        </section>
        </div>
    )
}



export default Study;