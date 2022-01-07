import React, { useState } from 'react';
import './Projects.scss';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import Videogames from './Videogames';
import WallEt from './WallEt';
import TodoLi from './TodoApp';
import clima from '../../../image/Proyectos/Clima.png'
export const Projects = () => {
    const slides = Videogames;
    const wallet = WallEt;
    const todolist = TodoLi;

    const [value, setValue] = useState(0);
    const [wall, setWall] = useState(0);
    const [todo, setTodo] = useState(0);
    
    const length = slides.length;
    const lengthW = wallet.length
    

    const nextSlide = () => {
        setValue(value === length - 1 ? 0 : value + 1);
      };
    
      const prevSlide = () => {
        setValue(value === 0 ? length - 1 : value - 1);
        
        if (!Array.isArray(slides) || slides.length <= 0) {
            return null;
        }
    };

      const nextSlideWll = () => {
        setWall(wall === lengthW - 1 ? 0 : wall + 1);
      };
    
      const prevSlideWll = () => {
        setWall(wall === 0 ? lengthW - 1 : wall - 1);
        
        if (!Array.isArray(wallet) || wallet.length <= 0) {
            return null;
        }
    };
    
    const nextSlideTodo = () => {
        setTodo(todo === todolist.length - 1 ? 0 : todo + 1);
      };
    
      const prevSlideTpdp = () => {
        setTodo(todo === 0 ? todolist.length - 1 : todo - 1);
        
        if (!Array.isArray(todolist) || todolist.length <= 0) {
            return null;
        }
    };

    return(
        <div className='div_projects'> 
            <section id="Projectos" className='section '>
            <div>
                <h1 className='h1_about'>
                Proyectos
                </h1>
                <div className='grid_proyectos'>
                    <div className='proyect_videogames'>
                        {Videogames.map((slide,index) => {
                            return (
                                <div
                                  className={index === value ? 'slide active' : 'slide'}
                                  key={index}
                                >
                                  {index === value && (
                                    <img src={slide.image} alt='travel image' className='imagen_proyectos' />
                                  )}
                                </div>
                              );
                            })}
                        <div className='arrows_a'>
                    <FaArrowAltCircleLeft className='left-arrow'  className='left-arrow' onClick={prevSlide} />
                    <FaArrowAltCircleRight className='right-arrow' className='right-arrow'  onClick={nextSlide} />
                        </div>
                        <h1>Videogames</h1>
                        <p>Videogames es una pagina web hecha con el stack PERN.En ella vas a poder ver los juegos que existen, vas a poder filtrar por los mas conocidos y crear un juego
                        </p>
                        <a href="https://github.com/Gonzaloejuarez/Videogames" target="_BLANK" className='button button--flex'>Repositorio</a>
                    </div>
                    <div className='proyect_videogames'>
                        {WallEt.map((slide,index) => {
                            return (
                                <div
                                  className={index === wall ? 'slide active' : 'slide'}
                                  key={index}
                                >
                                  {index === wall && (
                                    <img src={slide.image} alt='travel image' className='imagen_proyectos' />
                                  )}
                                </div>
                              );
                            })}
                        <div className='arrows_a'>
                    <FaArrowAltCircleLeft className='left-arrow'  className='left-arrow' onClick={prevSlideWll} />
                    <FaArrowAltCircleRight className='right-arrow' className='right-arrow'  onClick={nextSlideWll} />
                        </div>
                        <h1>Wall-Et</h1>
                        <p>Wall-Et es una billetera virtual en la cual vas a poder hacerle transferencias a amigos, conocidos y podras ver como esta interactuando tu cuenta con las finanzas mensuales. Este proyecto esta hecho con el stack PERN</p>
                        <a href="https://github.com/Gonzaloejuarez/Wall-et" target="_BLANK" className='button button--flex'>Repositorio</a>
                    </div>
                    <div className='proyect_videogames'>
                        {TodoLi.map((slide,index) => {
                            return (
                                <div
                                  className={index === todo ? 'slide active' : 'slide'}
                                  key={index}
                                >
                                  {index === todo && (
                                    <img src={slide.image} alt='travel image' className='imagen_proyectos' />
                                  )}
                                </div>
                              );
                            })}
                        <div className='arrows_a'>
                    <FaArrowAltCircleLeft className='left-arrow'  className='left-arrow' onClick={prevSlideTpdp} />
                    <FaArrowAltCircleRight className='right-arrow' className='right-arrow'  onClick={nextSlideTodo} />
                        </div>
                        <h1> To-do App</h1>
                        <p>To-do App es una aplicacion en la cual vas a tener tu propio perfil donde podras loguearte o registrarte y dentro de ella vas a poder poner en una lista las tareas predeterminadas que tengas que hacer, tambien podras editarlas y eliminarlas.
                            Este proyecto esta hecho con el stack PERN
                        </p>
                        <a href="https://github.com/Gonzaloejuarez/ToDoApp"  target="_BLANK" className='button button--flex'>Repositorio</a>
                    </div>
                    <div className='proyect_videogames'>
                        <img src={clima} alt="Clima" className='imagen_proyectos'/>
                        <h1>NextClima</h1>
                        <p>NextClima es una aplicacion en la cual vas a poder ver el clima de la ciudad que vos busques. A medida de que vayas agregando ciudades tambien vas a poder sacarlas del inicio. Proximamente se le agregara un usuario, El proyecto hesta hecho con ReactJS
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