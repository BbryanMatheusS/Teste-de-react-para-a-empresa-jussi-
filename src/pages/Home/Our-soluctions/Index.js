import React, { useEffect, useState, useRef } from "react";
import {CgArrowLeftR, CgArrowRightR} from "react-icons/cg"

import api from "../../../api";


import Pikachu from '../../../imgs/Pikachu.jpg';
import Pokebola from '../../../imgs/Pokebola.png';

import './Styles.css';





const OurSoluctions = ({DataPokemon}) => {
    console.log(DataPokemon)


    

    // const[dataPokemon, setDataPokemon] = useState([]);
    // const[PokemonName, setPokemonName] = useState([]);
    // const[PokemonMoves0, setPokemonMoves0] = useState([]);
    // const[PokemonMoves1, setPokemonMoves1] = useState([]);
    // const[PokemonMoves2, setPokemonMoves2] = useState([]);
    // const[PokemonType, setPokemonType] = useState([]);
    // const[PokemonDex, setPokemonDex] = useState([]);
    // const[PokemonIMG, setPokemonIMG] = useState([]);

    const carrossel = useRef(null)


    // useEffect(() => {

        
    //     api.get(`/pokedex/2/`)
    //         .then(response => {

    //         setDataPokemon(response.data.pokemon_entries)
    //         setPokemonName(response.data.name)
    //         setPokemonMoves0(response.data.moves[0].move.name)
    //         setPokemonMoves1(response.data.moves[1].move.name)
    //         setPokemonMoves2(response.data.moves[2].move.name)
    //         setPokemonType(response.data.types[0].type.name)
    //         setPokemonDex(response.data.id)
    //         setPokemonIMG(response.data.sprites.other.home.front_default)

            





    //         })
    //         .catch( 
    //             error => {
    //             console.log(error + ' Pokemon inexistente')
    //             }
    //         )
    //         // eslint-disable-next-line react-hooks/exhaustive-deps
    // },[])
    // console.log(dataPokemon)
    


    const handleLeftClick = (e) => {
        e.preventDefault()
        //console.log(carrossel.current.offsetWidth)
        carrossel.current.scrollLeft -= /* 968 */ 208
    }
    const handleRightClick = (e) => {
        e.preventDefault()
        //console.log(carrossel.current.offsetWidth)
        carrossel.current.scrollLeft += /* 968 */ 208
    }








    
    return (
        <div id="Our-soluctions">
            <h1 className="title">Nossas Soluções</h1>

            

            <div className="items" ref={carrossel}>            
                
                
                {DataPokemon.map(poke => {

                    return(

                    <div className="Poke_info">
                        <img src={poke.img} alt="imagemP1" />          
                        <h2>#{poke.id}º {poke.name}</h2>
                        <p>Type:{poke.type}</p>
                        <p>{poke.move[0]}</p>
                        <p>{poke.move[1]}</p>
                        <p>{poke.move[2]}</p>
                        <button  className="Btxt">Ver Solução</button>
                    </div>

                )})}
            </div>
            <div className="Buttons">
                <button onClick={handleLeftClick}><CgArrowLeftR/></button>
                <button onClick={handleRightClick}><CgArrowRightR/></button>
            </div>
        </div>
    )
}

export default OurSoluctions;
