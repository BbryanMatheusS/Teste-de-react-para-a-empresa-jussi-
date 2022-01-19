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
            
            <div id="button"><button>Veja nossas soluções</button></div>
            
            
            
            
            <div id="imagensbanner3" className="item">
                <img src={bebida} alt="" />
                <button className="batedeira">Comprar em 12x</button>
            </div>
            <div id="imagensbanner2" className="item">
                <img src={geladeira} alt="" />
                <button className="geladeira">Mais Detalhes</button>
            </div>
            <div id="imagensbanner1" className="item">
                <img src={batedeira} alt="" />
                <button className="bebida">Adicionar à sacola</button>
            </div>
        
    
        </div>
    )
}

export default HeroBanner;