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


const StyledCards = styled.div`
width:100%;
height: 100%;
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
    return (
        <StyledCards>
            <div className="cardWrapper">
                <a href="https://simplecalculator92.netlify.app/">
                <Card cardClass={"card1"}/>
                <h2>Calculator with React.js</h2>
                </a>
            </div>
            <div className="cardWrapper">
            <a href="https://mtzngn.github.io/canvasConstellation/">
                <Card cardClass={"card2"}/>
                <h2>Constellations</h2>
            </a>
            </div>
            <div className="cardWrapper">
            <a href="https://mtzngn.github.io/spaceInvaders/">
                <Card cardClass={"card3"}/>
                <h2>Space Invaders </h2>
            </a>
            </div>
            <div className="cardWrapper">
            <a href="https://mtzngn.github.io/twitter-clone">
                <Card cardClass={"card4"}/>
                <h2>Twitter Clone</h2>
            </a>
            </div>
            <div className="cardWrapper">
            <a href="https://mtzngn.github.io/topTrumpGame/">
                <Card cardClass={"card5"}/>
                <h2>Top Trump</h2>
            </a>
            </div>
            <div className="cardWrapper">
            <a href="https://mtzngn.github.io/diceGame2/">
                <Card cardClass={"card6"}/>
                <h2>Dice Game</h2>
            </a>
            </div>
            <div className="cardWrapper">
            <a href="https://mtzngn.github.io/whackAMoleGame/">
                <Card cardClass={"card7"}/>
                <h2>Whack A Mole</h2>
            </a>
            </div>
            <div className="cardWrapper">
            <a href="https://mtzngn.github.io/drumKit/">
                <Card cardClass={"card8"}/>
                <h2>Drum Kit</h2>
            </a>
            </div>
            <div className="cardWrapper">
            <a href="https://mtzngn.github.io/keyCodeProject/">
                <Card cardClass={"card9"}/>
                <h2>Key Code</h2>
            </a>
            </div>
        </StyledCards>
    )
}

export default Projects
