import React, {useState, useEffect} from "react";
import "./nav.scss";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';
import { Link } from "react-router-dom";
export const NavBar = () => {

    const [user, setUser] = useState(false)

    const handleClick = () => {
        setUser(!user)
    }
    return(
        <div className="todo">
         {/* <footer  className='menu-bars' >
                <FaIcons.FaBars onClick={handleClick} className='pepe'/>
         </footer> */}
         <nav className="nav_menu_nav"/* className={ /* user ? 'nav-menu active' : 'nav-menu' */>
         <ul className='nav-menu-items' onClick={handleClick}>
                    {/* <li className="navbar-toggle">
                     <Link to="#" className="menu-bars">
                         <AiIcons.AiOutlineClose className='pepe' />
                     </Link> 
                    </li>   */}
                    <li className="nav-text">
                        <a href="#Inicio" > <AiIcons.AiFillHome /> Inicio</a>
                    </li>
                    <li className="nav-text">
                        <a href="#SobreMi" > <FaIcons.FaUser /> Sobre mi</a>
                    </li>
                    <li className="nav-text">
                        <a href="#Projectos" > <FaIcons.FaProjectDiagram /> Projectos</a>
                    </li>
                    <li className="nav-text">
                        <a href="#Estudio" > <FaIcons.FaBookOpen /> Estudio</a>
                    </li>
                    <li className="nav-text">
                        <a href="#Contactame" > <RiIcons.RiSendPlane2Fill />Contactame</a>
                    </li>
                </ul>
         </nav>
        </div>
    )
}

export default NavBar