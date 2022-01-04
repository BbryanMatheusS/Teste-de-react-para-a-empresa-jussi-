import React, { useEffect, useState, useRef } from "react";
import {CgArrowLeftR, CgArrowRightR} from "react-icons/cg"

import api from "../../../api";


import Pikachu from '../../../imgs/Pikachu.jpg';
import Pokebola from '../../../imgs/Pokebola.png';

import './Styles.css';





const OurSoluctions = () => {


    //const[Pokemon, setPokemon] = useState([]);

    const[dataPokemon, setDataPokemon] = useState([]);
    /* const[PokemonName, setPokemonName] = useState([]);
    const[PokemonMoves0, setPokemonMoves0] = useState([]);
    const[PokemonMoves1, setPokemonMoves1] = useState([]);
    const[PokemonMoves2, setPokemonMoves2] = useState([]);
    const[PokemonType, setPokemonType] = useState([]);
    const[PokemonDex, setPokemonDex] = useState([]);
    const[PokemonIMG, setPokemonIMG] = useState([]); */

    const carrossel = useRef(null)


    useEffect(() => {

        
        api.get(`/pokedex/1/`)
            .then(response => {

            setDataPokemon(response.data.pokemon_entries)
           /*  setPokemonName(response.data.name)
            setPokemonMoves0(response.data.moves[0].move.name)
            setPokemonMoves1(response.data.moves[1].move.name)
            setPokemonMoves2(response.data.moves[2].move.name)
            setPokemonType(response.data.types[0].type.name)
            setPokemonDex(response.data.id)
            setPokemonIMG(response.data.sprites.other.home.front_default)
 */
            console.log(dataPokemon)
            /* console.log(PokemonName)
            console.log(PokemonMoves0)
            console.log(PokemonDex)
            console.log(PokemonType)
            console.log(PokemonIMG) */




            })
            .catch( 
                error => {
                console.log(error + ' Pokemon inexistente')
                }
            )
            // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    const handleLeftClick = (e) => {
        e.preventDefault()
        //console.log(carrossel.current.offsetWidth)
        carrossel.current.scrollLeft -= 968
    }
    const handleRightClick = (e) => {
        e.preventDefault()
        //console.log(carrossel.current.offsetWidth)
        carrossel.current.scrollLeft += 968
    }








    
    return (
        <div id="Our-soluctions">
            <h1 className="title">Nossas Soluções</h1>

            

            <div className="items" ref={carrossel}>            
                {
                    dataPokemon.map(poke =>{
                        return(
                            <div className="p1">
                                <img src={Pokebola} alt="imagemP1" />          
                                <h2>#{poke.entry_number}º {poke.pokemon_species.name}</h2>
                                <p>Type:Type</p>
                                <p>PokemonMoves0</p>
                                <p>PokemonMoves1</p>
                                <p>PokemonMoves2</p>
                                <button  className="Btxt">Ver Solução</button>
                            </div>
                        )
                    })
                }   
            </div>
            <div className="Buttons">
                <button onClick={handleLeftClick}><CgArrowLeftR/></button>
                <button onClick={handleRightClick}><CgArrowRightR/></button>
            </div>
        </div>
    )
}

export default OurSoluctions;
