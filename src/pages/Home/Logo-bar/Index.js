import React from "react";
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

import Brastemp from '../../../imgs/logo-brastemp.png';
import Thebar from '../../../imgs/logo-thebar.png';
import Consul from '../../../imgs/Consul.png';
import compraCerta from '../../../imgs/Compra-certa.png';

import './Styles.css';



const LogoBar = () => {

    return (
        <div id="Logo-bar">
            <p>
            Nossas principais lojas VTEX
            </p>
            
            <p>
            <HiOutlineArrowNarrowRight/>
            </p>
            <ul>
                <li><a className="Brastemp"  href="https://www.brastemp.com.br/" target="_blank" rel="noopener noreferrer"><img src={Brastemp} alt="Brastemp"/></a></li>
                <li><a className="compraCerta" href="https://www.compracerta.com.br/" target="_blank" rel="noopener noreferrer"><img src={compraCerta} alt="compraCerta"/></a></li>
                <li><a className="Consul" href="https://loja.consul.com.br/" target="_blank" rel="noopener noreferrer"><img  src={Consul} alt="Consul"/></a></li>
                <li><a className="Thebar" href="https://br.thebar.com/" target="_blank" rel="noopener noreferrer"><img  src={Thebar} alt="Thebar"/></a></li>
                
            </ul>
            
            
            
        </div>
    )
}

export default LogoBar;