import React from "react";
import "./Study.scss"
import henry from '../../../image/Henry.jfif';
import escuela from '../../../image/escuela.jpg'
export const Study = () => {
    return(
        <div className="div_study">
        <section id="Estudio" className="section">
            <div>
                <h1 className="h1_about">Educacion</h1>
                <div className="estudio_cosas">
                <div className="todo_estudio"> 
                <h1 className="h1_estudio2"><img src={henry} className="image2nSocial" alt="Henry" />
                Henry
                </h1>
                <p className="h1_parrafo">
                    Abr 2021 - Sep 2021
                </p>
                </div>
                <div className="todo_estudio2">
                <h1 className="h1_estudio2">
                    <img className="image2nSocial" src={escuela} alt="Tecnica" />
                    Tecnico
                </h1>
                <p className="h1_parrafo">
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