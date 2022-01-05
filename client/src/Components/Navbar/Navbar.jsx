import React, {useState, useEffect} from "react";
import "./nav.scss";
import { UilUser , UilEstate , UilClipboardNotes , UilGraduationCap , UilJavaScript , UilMessage   } from '@iconscout/react-unicons'

export const NavBar = () => {

    const [user, setUser] = useState(false)

    const handleClick = () => {
        setUser(!user)
    }
    return(
        <div className="todo">
         <div className="nav_menu_nav">
         <ul className='nav-menu-items' onClick={handleClick}>
                    {/* <li className="navbar-toggle">
                     <Link to="#" className="menu-bars">
                         <AiIcons.AiOutlineClose className='pepe' />
                     </Link> 
                    </li>   */}
                    <li className="nav-text">
                        <a href="#Inicio" className="nav_link" > <UilEstate className="nav_logo" /> Inicio</a>
                    </li>
                    <li className="nav-text">
                        <a href="#SobreMi" className="nav_link"  > <UilUser className="nav_logo"/> Sobre mi</a>
                    </li>
                    <li className="nav-text">
                        <a href="#Projectos" className="nav_link"  > <UilClipboardNotes className="nav_logo"/> Projectos</a>
                    </li>
                    <li className="nav-text">
                        <a href="#Estudio" className="nav_link"  > <UilGraduationCap className="nav_logo" /> Estudio</a>
                    </li>
                    <li className="nav-text">
                        <a href="#Skills"  className="nav_link" > <UilJavaScript  className="nav_logo"/> Skills</a>
                    </li>
                    <li className="nav-text">
                        <a href="#Contactame" className="nav_link"  > <UilMessage  className="nav_logo"/>Contactame</a>
                    </li>
                </ul>
         </div>
        </div>
    )
}

export default NavBar