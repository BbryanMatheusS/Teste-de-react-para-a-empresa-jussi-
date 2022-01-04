import React from "react";

import batedeira from '../../../imgs/batedeira.png';
import geladeira from '../../../imgs/geladeira.png';
import bebida from '../../../imgs/bebida.png';

import './Styles.css';




const HeroBanner = () => {
    return (
        <div id="Hero-banner">
            <h1>Criamos lojas que vendem mais.</h1>
            
            <p>
                A Jüssi é especialista na criaçao de lojas 
                usando a plataforma VTEX. 
                Precisa criar sua loja ou migrar de plataforma?
            </p>
            <a className="Button" href="/">
                <button className="Btxt">Veja nossas soluções</button>
            </a>
            
            
            <div id="imagensbanner3">
                <img src={bebida} alt="" />
                <button className="batedeira">Comprar em 12x</button>
            </div>

            <div id="imagensbanner2">
                <img src={geladeira} alt="" />
                <button className="geladeira">Mais Detalhes</button>
            </div>

            <div id="imagensbanner1">
                <img src={batedeira} alt="" />
                <button className="bebida">Adicionar à sacola</button>
            </div>
        
        </div>
    )
}

export default HeroBanner;