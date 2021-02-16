import React from 'react'
import styled from "styled-components";
import SocialLinks from "../components/SocialLinks"
import Typist from 'react-typist';
import Canvas from "../components/Canvas"



const StyledWelcome = styled.div`
.canvasWrapper {
    width:100%;
    height: 92vh;
    position: absolute;
    z-index: -1;
    background: transparent;
}
position: relative;

width:100%;
height: 92vh;
background-color: rgba(20, 33, 61, 0.1);
display:flex;
flex-direction: column;
justify-content: center;
align-items:center;
color: white;

div {
    height:20%;
    h1{
        font-size:1.5em;
        text-align:center;
        margin-top:20px;
        margin-left:10px;
        @media(min-width:765px){
            font-size:2em;
        }
        @media(min-width:1024px){
            font-size:2.4em;
        }
        @media(min-width:1440px){
            font-size:3em;
        }
    }
}
`
const Home = () => {
    return (
        <StyledWelcome>
            <div>
                <Typist avgTypingSpeed={5} cursor={{ show: false}}>
                    <h1>Hi there, i'm Taha. </h1>
                    <Typist.Delay ms={500} />
                    <h1>Junior Full-Stack Web Developer</h1>
                    <Typist.Backspace count={31} delay={600} />
                    <h1>Engineer</h1>
                    <Typist.Backspace count={8} delay={600} />
                    <h1>Traveller</h1>
                    <Typist.Backspace count={9} delay={600} />
                    <h1>{"{Coder}"}</h1>
                </Typist>
            </div>
            <SocialLinks />
            <div className="canvasWrapper">
                <Canvas/>
            </div>
        </StyledWelcome>
    )
}

export default Home
