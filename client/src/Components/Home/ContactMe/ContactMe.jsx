import React from "react";
//estilo
import style from  "./Contact.module.css";
//importacion de imagenes
import wsp from '../../../image/whatsapp.png';
import Git from '../../../image/github.png';
import Link from '../../../image/linkedin__red.png';
import gmail from '../../../image/gmail.png';


export const ContactMe = () => {
    return(
        <div className={style.div_images}>
        <section id="Contactame" className={style.section}>
            <div>
                <h1 className={style.h1_about}>
                    Contactame
                </h1>
            <div className={style.images}>
            <a href="https://api.whatsapp.com/send?phone=1130449589" target="_BLANK">
                    <img className={style.imagenSocial} src={wsp} alt=""/>
                </a>
                <a href="https://www.linkedin.com/in/gonzalo-juarez-o2/" target='_BLANK'class="home__social-icon">
                    <img className={style.imagenSocial} src={Link} alt=""/>
                </a>
                <a href="https://mail.google.com/a/?view=cm&fs=1&to=juarezgonzalo000@gmail.com" target="_BLANK">
                    <img className={style.imagenSocial}  src={gmail} alt=""/>
                </a>
                <a href="https://github.com/Gonzaloejuarez" target="_BLANK">
                    <img className={style.imagenSocial}  src={Git} alt=""/>
                </a>
            </div>
            </div>
        </section>
        </div>
    )
}

export default ContactMe