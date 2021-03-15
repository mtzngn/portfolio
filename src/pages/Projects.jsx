import React from 'react'
import styled from "styled-components";
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
    height: 92vh;
    background-color: #14213D;
    overflow-y:auto;
.card {
    width: 100%;
    height: 20rem;
    position: relative;
    transition: all .5s ease-in;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
}
 
.card-image {
    height: 200px;
    width: 200px;
    border-radius: 25px;
    display: block;
    margin-left: auto;
    margin-right: auto;
}
.card-overlay {
    position: absolute;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    border-radius: 25px;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 200px;
    width: 200px;
    opacity: 0;
    visibility: none;
    transition: .5s ease;
    background-color: rgba(20,33,61,0.9);
    .overlay-text {
        display:flex;
        flex-direction:column;
        align-items: center;
        justify-content: center;
        color: #fff;
        h3{

        }
        p{

        }
        a{
            text-decoration:none;
            margin-top: 20%;
            padding: 6%;
            color: #fff;
            border: 1px solid #fff;
        }
        a:hover{
            text-decoration:none;
            margin-top: 20%;
            padding: 6%;
            color: #000;
            border: 1px solid #000;
            background-color: #fff;
        }
    }
}
.card:hover .card-overlay {
    opacity: 1;
}
@media(min-width: 768px){
    display:flex;
    flex-direction:row;
    flex-wrap: wrap;
    height:fit-content;
    .card{
        width: 50%;
    }
}
@media(min-width: 1024px){
    display:flex;
    flex-direction:row;
    flex-wrap: wrap;
    height:92vh;
    .card{
        width: 33%;
    }
}
@media(min-width: 1440px){
    display:flex;
    flex-direction:row;
    flex-wrap: wrap;
    height:92vh;
    .card{
        width: 33%;
        margin-top:4%;
    }
    .card-image, .card-overlay {
    height: 300px;
    width: 300px;

}
}
@media(min-width: 2560px){
    display:flex;
    flex-direction:row;
    flex-wrap: wrap;
    height:92vh;
    .card{
        width: 33%;
        margin-top:4%;
    }
    .card-image, .card-overlay {
    height: 70%;
    width: 50%;

}
}

`
const Projects = () => {
    const cards = [
        {link : "https://moo-v-find.netlify.app/", class : "card card0", title: "Moo-v-find", image: `${moovfind}`, exp:"Full Stack App with MERN"},
        {link : "https://simplecalculator92.netlify.app/", class : "card card1", title: "Calculator", image: `${calculator}`, exp:"Build with React.js"},
        {link : "https://mtzngn.github.io/canvasConstellation/", class : "card card2", title: "Constellations", image: `${constellation}`, exp:"Made with Vanilla JS"},
        {link : "https://mtzngn.github.io/spaceInvaders/", class : "card card3", title: "Space Invaders", image: `${spaceInvaders}`, exp:"Made with Vanilla JS"},
        {link : "https://mtzngn.github.io/twitter-clone", class : "card card4", title: "Twitter Clone", image: `${twitterClone}`, exp:"Build with React.js"},
        {link : "https://mtzngn.github.io/topTrumpGame/", class : "card card5", title: "Top Trump", image: `${pokemon}`, exp:"JS DOM Manipulation"},
        {link : "https://mtzngn.github.io/diceGame2/", class : "card card6", title: "Dice Gmae", image: `${diceGame}`, exp:"JS DOM Manipulation"},
        {link : "https://mtzngn.github.io/whackAMoleGame/", class : "card card7", title: "Whack A Mole", image: `${whackAMole}`, exp:"JS DOM Manipulation"},
        {link : "https://mtzngn.github.io/drumKit/", class : "card card8", title: "Drum Kit", image: `${drumKit}`, exp:"JS DOM Manipulation"},
        {link : "https://mtzngn.github.io/keyCodeProject/", class : "card card9", title: "Key Code", image: `${keyCodeProject}`, exp:"JS DOM Manipulation"},
    ]
    return (
        <StyledCards>
            {cards.map((card, i)=>{
                return(
                <div className="card" key={(i +1)*350}>
                    <img src={card.image} className="card-image" key={(i +1)*50} alt={cards.title}></img>
                    <div className="card-overlay" key={(i +1)*250}>
                        <div className="overlay-text" key={(i +1)*300}>
                            <h3 key={(i +1)*100}>{card.title} </h3>
                            <p key={(i +1)*150}>{card.exp}</p>
                            <a href={card.link} className="button" key={(i +1)*200}>Open Project</a>
                        </div>
                    </div>
                </div>
                )
            })}

        </StyledCards>
    )
}

export default Projects
