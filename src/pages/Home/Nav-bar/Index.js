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
            
            <ul>
                <li><a className="a" href="#Our-soluctions">Nossas soluções</a></li>
                <li><a className="a" href="#Jussi-session">Conheça a Jüssi</a></li>
                
                <li>
                    <div className="content">
                        <input type="text" placeholder="Buscar"/>
                    
                        <button>
                            <Link className='pesquisa' to="/Pokemon">
                                <GoSearch/>
                            </Link>
                    
                        </button>
                    </div>
                </li>
                
                <li><a className="a" href="/">Login</a></li>
                
                <li><a className="a" href=""><FiShoppingCart/></a></li>
            </ul> 
        </div>
    )


}

export default Navbar;