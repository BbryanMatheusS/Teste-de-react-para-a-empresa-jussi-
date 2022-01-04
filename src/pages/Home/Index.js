import React/* , { useEffect, useState } */ from "react";
import './Styles.css';

/* import api from '../../api.js'; */


import Navbar from "./Nav-bar/Index.js";
import Herobanner from "./Hero-banner/Index.js";
import LogoBar from "./Logo-bar/Index.js";
import OurSoluctions from "./Our-soluctions/Index.js";
import JussiSession from "./Jussi-session/Index.js";
import ContactInfo from "./Contact-info/Index.js";
import NewLetter from "./New-letter/Index.js";
import Footer from "./Footer/Index.js";




const Home = () => {

/* 

  const[Pokemon, setPokemon] = useState('');

  const[dataPokemon, setDataPokemon] = useState([]);
  const[PokemonName, setPokemonName] = useState([]);
  const[PokemonMoves, setPokemonMoves] = useState([]);
  const[PokemonType, setPokemonType] = useState([]);
  const[PokemonDex, setPokemonDex] = useState([]);


  useEffect(() => {
    api.get('/pokemon/venusaur')
      .then(response => {

        setDataPokemon(response.data)
        setPokemonName(response.data.name)
        setPokemonMoves(response.data.moves)
        setPokemonType(response.data.types[0].type.name)
        setPokemonDex(response.data.id)

        console.log(dataPokemon)
        console.log(PokemonName)
        console.log(PokemonMoves)
        console.log(PokemonDex)
        console.log(PokemonType)
      })
      .catch( 
        error => {
          console.log(error + ' Pokemon inexistente')
        }
      )
      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
   




 */





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

      <OurSoluctions />

      <JussiSession />

      <ContactInfo />

      <NewLetter />

      <Footer />
    
    </div>   
  );
}

export default Home;
