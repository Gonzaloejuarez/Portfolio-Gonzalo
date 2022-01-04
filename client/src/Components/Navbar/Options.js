import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

const Inicio = (<a href='#Inicio'/>)

export const options =  [
    {
        title: 'Inicio',
        icon: <AiIcons.AiFillHome />,
        cName : 'nav-text',
        a : Inicio
    },
    {
        title: 'Sobre Mi',
        icon: <AiIcons.AiOutlineContainer />,
        cName : 'nav-text',
        a : <a href='#SobreMi' />
    },
    {
        title: 'Proyectos',
        icon: <AiIcons.AiOutlineContainer />,
        cName : 'nav-text',
        a : <a href='#Proyectos'/>
    },
    {
        title: 'Educacion',
        icon: <AiIcons.AiFillStar />,
        cName : 'nav-text',
        a : <a href='#Educacion'/>
    },
    {
        title: 'Contactame',
        icon: <AiIcons.AiFillStar />,
        cName : 'nav-text',
        a : <a href='#Contactame'/>
    }

]

export default options