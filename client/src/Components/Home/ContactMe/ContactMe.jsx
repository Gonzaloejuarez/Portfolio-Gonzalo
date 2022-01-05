import React from "react";
//estilo
import "./ContactMe.scss";
//importacion de imagenes
import wsp from '../../../image/whatsapp.png';
import Git from '../../../image/github.png';
import Link from '../../../image/linkedin__red.png';
import gmail from '../../../image/gmail.png';


export const ContactMe = () => {
    return(
        <div className="div_images">
        <section id="Contactame" className="section">
            <div>
                <h1 className="h1_contact">
                    Contactame
                </h1>
            <div className="images">
            <a href="https://api.whatsapp.com/send?phone=1130449589" target="_BLANK">
                    <img className="imagenSocial" src={wsp} alt=""/>
                </a>
                <a href="https://www.linkedin.com/in/gonzalo-juarez-o2/" target='_BLANK'class="home__social-icon">
                    <img className="imagenSocial" src={Link} alt=""/>
                </a>
                <a href="https://mail.google.com/a/?view=cm&fs=1&to=juarezgonzalo000@gmail.com" target="_BLANK">
                    <img className="imagenSocial"  src={gmail} alt=""/>
                </a>
                <a href="https://github.com/Gonzaloejuarez" target="_BLANK">
                    <img className="imagenSocial"  src={Git} alt=""/>
                </a>
            </div>
            </div>
        </section>
        </div>
    )
}

export default ContactMe