import React, {useState, useEffect} from "react";
import Style from "./Nav.module.css";
import { UilUser , UilEstate , UilClipboardNotes , UilGraduationCap , UilJavaScript , UilMessage   } from '@iconscout/react-unicons'

export const NavBar = () => {

    const [user, setUser] = useState(false)

    const handleClick = () => {
        setUser(!user)
    }
    return(
        <div className={Style.todo}>
         <div className={Style.nav_menu_nav}>
         <ul className={Style.nav_menu_items} onClick={handleClick}>
                    {/* <li className="navbar-toggle">
                     <Link to="#" className="menu-bars">
                         <AiIcons.AiOutlineClose className='pepe' />
                     </Link> 
                    </li>   */}
                    <li className={Style.nav_text}>
                        <a href="#Inicio" className={Style.nav_link} > <UilEstate className="nav_logo" /> Inicio</a>
                    </li>
                    <li className={Style.nav_text}>
                        <a href="#SobreMi" className={Style.nav_link}   > <UilUser className="nav_logo"/> SobreMi</a>
                    </li>
                    <li className={Style.nav_text}>
                        <a href="#Projectos" className={Style.nav_link}  > <UilClipboardNotes className="nav_logo"/> Projectos</a>
                    </li>
                    <li className={Style.nav_text}>
                        <a href="#Estudio" className={Style.nav_link}   > <UilGraduationCap className="nav_logo" /> Estudio</a>
                    </li>
                    <li className={Style.nav_text}>
                        <a href="#Skills"  className={Style.nav_link}  > <UilJavaScript  className="nav_logo"/> Skills</a>
                    </li>
                    <li className={Style.nav_text}>
                        <a href="#Contactame" className={Style.nav_link}   > <UilMessage  className="nav_logo"/>Contactame</a>
                    </li>
                </ul>
         </div>
        </div>
    )
}

export default NavBar