import React from "react";

import './Styles.css';

const NewLetter = () => {

    return (
        <div id="Newletter">
            <p>
            Receba novidade da nossa area <br/>
            de produtos digitais.
            </p>
            
            <div className="email">
                <input id="email" type="email" name="email"  placeholder="Digite seu e-mail"/>
                <input type="submit" id="submit" value="Cadastrar" />
            </div>
            
        </div>

    )
}

export default NewLetter;