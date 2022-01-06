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
                <p><img src={henry} className="imagenSocial" alt="Henry" />
                Henry
                </p>
                <p>
                    13abr 2021 - 13sep 2021
                </p>
                </div>
                <div className="todo_estudio2">
                <p>
                    <img className="imagenSocial" src={escuela} alt="Tecnica" />
                    Tecnico
                </p>
                <p>
                    2014 - 2020
                </p>
                </div>
                </div>

            </div>

        </section>
        </div>
    )
}



export default Study;