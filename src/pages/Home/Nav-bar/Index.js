import React from "react";
import { GoSearch } from 'react-icons/go';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from "react-router-dom";


import Jussi from '../../../imgs/Jussi.svg';

import './Styles.css';




const Navbar = () => {
    return (
        <div id="Nav-bar">

            <img src={Jussi} alt="Logo" />
            <p>
                <a className="a" href="#Our-soluctions">Nossas soluções</a>
            </p>
            <p>
                <a className="a" href="#Jussi-session">Conheça a Jüssi</a>
            </p>

            
            <div className="content">
                <input type="text" placeholder="Buscar"/>
               
                <button>
                    <Link className='pesquisa' to="/Pokemon">
                        <GoSearch/>
                    </Link>
                    
                </button>         
            </div>
            <p>
                Login
            </p>
            <p><FiShoppingCart/></p>
        </div>
    )


}

export default Navbar;