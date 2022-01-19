import React from "react";

import imgJussi from '../../../imgs/image-jussi.png';


import './Styles.css';


const JussiSession = () => {

    return (
        <div id="Jussi-session">
            <h1>Olá, Somos a jüssi</h1>
            <p>
                A Jüssi é uma agência integrante do grupo global WPP
                que vem há 10 anos consolidando o pensamento voltado 
                para produtos e resolução de problemas.
                Nosso área dedicada exclusivamente para Produtos Digitais
                é organizada em 6 especialidades: 
                Product Managamenet, User Experience Design, SEO, 
                Tecnologia, Agile e User Behavior Analytics. 
            </p>
            <div id="button">
                <a href="https://jussi.com.br/" rel="noreferrer" target="_blank">                
                    <button>Conheça a Jüssi</button>
                </a>                
            </div>

           
            <img className="imgJussi" src={imgJussi} alt="imgJussi" />
        
            
        </div>

    )
}

export default JussiSession;