import React from 'react'
import styled from "styled-components";
import Card from "../components/Card"
import calculator from '../assets/calculator.png';
import constellation from '../assets/constellation.png';
import diceGame from '../assets/diceGame.png';
import drumKit from '../assets/drumKit.png';
import keyCodeProject from '../assets/keyCodeProject.png';
import pokemon from '../assets/pokemon.png';
import spaceInvaders from '../assets/spaceInvaders.png';
import twitterClone from '../assets/twitterClone.png';
import whackAMole from '../assets/whackAMole.png';
import moovfind from '../assets/moovfind.png';


const StyledCards = styled.div`
width:100%;
height: 100vh;
background-color: #14213D;

.cardWrapper a {
    text-decoration: none;
}
h2 {
    color: #fff;
    margin-top: 20px;
    text-align:center;
}
body {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: default;
}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  overflow: hidden;
  @media (min-width: 1024px){
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
.card {
  margin-top:50px;
  width: 20rem;
  height: 20rem;
  background: grey;
  border-radius: 5px;
  background-size: cover;
  background-position: center ;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.5s;
  will-change: transform;
  border: 15px solid white;
  @media (min-width: 1024px){
    width:100%;
    width: 15rem;
    height: 15rem;
    margin:50px;
  }
  @media (min-width: 1440px){
    width:100%;
    width: 20rem;
    height: 20rem;
    margin:50px;
  }
}
.card0 {
    background-image: url(${moovfind});
}
.card1 {
    background-image: url(${calculator});
}
.card2 {
    background-image: url(${constellation});
}
.card3 {
    background-image: url(${spaceInvaders});
}
.card4 {
    background-image: url(${twitterClone});
}
.card5 {
    background-image: url(${pokemon});
}
.card6 {
    background-image: url(${diceGame});
}
.card7 {
    background-image: url(${whackAMole});
}
.card8 {
    background-image: url(${drumKit});
}
.card9 {
    background-image: url(${keyCodeProject});
}
.card:hover {
  box-shadow: 0px 30px 100px -10px rgba(88, 44, 44, 0.4);
}

`
const Projects = () => {
    const cards = [
        {link : "https://moo-v-find.netlify.app/", class : "card0", title: "Moo-v-find with Mern Stack"},
        {link : "https://simplecalculator92.netlify.app/", class : "card1", title: "Calculator with React.js"},
        {link : "https://mtzngn.github.io/canvasConstellation/", class : "card2", title: "Constellations"},
        {link : "https://mtzngn.github.io/spaceInvaders/", class : "card3", title: "Space Invaders"},
        {link : "https://mtzngn.github.io/twitter-clone", class : "card4", title: "Twitter Clone"},
        {link : "https://mtzngn.github.io/topTrumpGame/", class : "card5", title: "Top Trump"},
        {link : "https://mtzngn.github.io/diceGame2/", class : "card6", title: "Dice Gmae"},
        {link : "https://mtzngn.github.io/whackAMoleGame/", class : "card7", title: "Whack A Mole"},
        {link : "https://mtzngn.github.io/drumKit/", class : "card8", title: "Drum Kit"},
        {link : "https://mtzngn.github.io/keyCodeProject/", class : "card9", title: "Key Code"},
    ]
    return (
        <StyledCards>
            {cards.map((card,i)=>{
                return(
                <div className="cardWrapper" key={(i + 1)*100}>
                    <a target="_blank" rel="noreferrer" href={card.link} key={(i + 1)*1000}>
                        <Card cardClass={card.class} key={(i + 1)*10000}/>
                        <h2 key={(i + 1)*100000}>{card.title}</h2>
                    </a>
                </div>
                )
            })}
        </StyledCards>
    )
}

export default Projects
