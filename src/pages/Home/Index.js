import React, { useEffect, useState } from "react";
import './Styles.css';

import api from '../../api.js';


import Navbar from "./Nav-bar/Index.js";
import Herobanner from "./Hero-banner/Index.js";
import LogoBar from "./Logo-bar/Index.js";
import OurSoluctions from "./Our-soluctions/Index.js";
import JussiSession from "./Jussi-session/Index.js";
import ContactInfo from "./Contact-info/Index.js";
import NewLetter from "./New-letter/Index.js";
import Footer from "./Footer/Index.js";




const Home = () => {


  
  
  const [DataPokemon, setDataPokemon] = useState([]);
  const [PokemonsName, setPokemonsName] = useState([]);



  
  useEffect (() => {
    const pokemons = async () => {
      const {data} = await api.get(`/pokedex/2/`)
      const dados = data.pokemon_entries
      setPokemonsName(...PokemonsName, dados.map(dado => (
        dado.pokemon_species.name
      )))
      
      
    };   
    pokemons()  
            // .then(response => {
            //   setPokemons(response.data.pokemon_entries)
            //   console.log(Pokemons)
            // }



            // )
            // .catch(
            //   error => (
            //     console.log(error + " Pokemon inexistente")
            //   )
            // )
    
      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  // console.log(PokemonsName)
  
  

  useEffect (() => {
    const dados = async () => {

      
      for(let i = 0; i < PokemonsName.length ; i++)
        {
          const {data} = await api.get(`/pokemon/${PokemonsName[i]}/`)
          const DadosPokemon =  
            {
              id: data.id ,
              name: data.name,
              type: data.types.map(type => type.type.name),
              move: data.moves.map(move => move.move.name),
              img: data.sprites.other.home.front_default
            }


          // setDataPokemon(...DataPokemon , DadosPokemon)
          setDataPokemon((prevState) => ([...prevState, DadosPokemon]))
          
          

            
            

        }
        
      

      // const {data} = await api.get(`/pokemon/${PokemonsName}/`)
      // const dadosPokemon = [...DataPokemon, 
      //   {
      //     id: data.id ,
      //     name: data.name,
      //     type: data.types.map(type => type.type.name),
      //     move: data.moves.map(move => move.move.name)
      //   }]
      // setDataPokemon(dadosPokemon)







    }

    dados()
  },[PokemonsName])

  // console.log(DataPokemon)
  

  
  
  

  

  // PARA FAZER A TRANSIÇAO DA TELA AO TOCAR EM UMA OPÇAO DO MENU:
  const menuItems = document.querySelectorAll('#Nav-bar a[href^="#"]');
  
  
  menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
  })
  function scrollToIdOnClick (event) {
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute('href');
    const to = document.querySelector(id).offsetTop;
    

    window.scroll({
      top:to - 80,
      behavior: "smooth",
    })
  }
  



  return (
    <div id="content">

      <Navbar />

      <Herobanner />

      <LogoBar />

      <OurSoluctions DataPokemon={DataPokemon} />

      <JussiSession />

      <ContactInfo />

      <NewLetter />

      <Footer />
    
    </div>   
  );
}

export default Home;
