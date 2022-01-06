import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import './Projects.scss';
import wall from '../../../image/Proyectos/Wall-Et1.png'
import videogames from '../../../image/Proyectos/Videogames.png';
import todoApp from '../../../image/Proyectos/TodoAPP2.png';
import clima from '../../../image/Proyectos/Clima.png'
export const Projects = () => {
    const [user,setUser] = useState(false);

    const handleClick = () => {
        setUser(user = !user)
    }

    return(
        <div className='div_projects'> 
            <section id="Projectos" className='section '>
            <div>
                <h1 className='h1_about' onClick={handleClick}>
                Proyectos
                </h1>
                <div className='grid_proyectos'>
                    <div className='proyect_videogames'>
                        <img src={videogames} alt="Videogames"className='imagen_proyectos'/>
                        <h1>Videogames</h1>
                        <p>Videogames es una pagina web hecha con el stack PERN.En ella vas a poder ver los juegos que existen, vas a poder filtrar por los mas conocidos y crear un juego
                        </p>
                        <a href="https://github.com/Gonzaloejuarez/Videogames" target="_BLANK" className='button button--flex'>Repositorio</a>
                    </div>
                    <div className='proyect_videogames'>
                        <img src={wall} alt="WallEt" className='imagen_proyectos'/>
                        <h1>Wall-Et</h1>
                        <p>Wall-Et es una billetera virtual en la cual vas a poder hacerle transferencias a amigos, conocidos y podras ver como esta interactuando tu cuenta con las finanzas mensuales. Este proyecto esta hecho con el stack PERN</p>
                        <a href="https://github.com/Gonzaloejuarez/Wall-et" target="_BLANK" className='button button--flex'>Repositorio</a>
                    </div>
                    <div className='proyect_videogames'>
                        <img src={todoApp} alt="TodoApp"  target="_BLANK" className='imagen_proyectos'/>
                        <h1> To-do App</h1>
                        <p>To-do App es una aplicacion en la cual vas a tener tu propio perfil donde podras loguearte o registrarte y dentro de ella vas a poder poner en una lista las tareas predeterminadas que tengas que hacer, tambien podras editarlas y eliminarlas.
                            Este proyecto esta hecho con el stack PERN
                        </p>
                        <a href="https://github.com/Gonzaloejuarez/ToDoApp"  target="_BLANK" className='button button--flex'>Repositorio</a>
                    </div>
                    <div className='proyect_videogames'>
                        <img src={clima} alt="Clima" className='imagen_proyectos2'/>
                        <h1>NextClima</h1>
                        <p>NextClima es una aplicacion en la cual vas a poder ver el clima de la ciudad que vos busques. El proyecto hesta hecho con ReactJS
                        </p>
                        <a href="https://github.com/Gonzaloejuarez/NextClima" target="_BLANK" className='button button--flex'>Repositorio</a>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}
export default Projects