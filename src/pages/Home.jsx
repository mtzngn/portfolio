import React from 'react'
import styled from "styled-components";
import SocialLinks from "../components/SocialLinks"
import Typist from 'react-typist';




const StyledWelcome = styled.div`
width:100%;
height: 92vh;
background-color: #14213D;
display:flex;
flex-direction: column;
justify-content: center;
align-items:center;
color: white;

div {
    height:20%;
    h1{
        text-align:center;
        margin-top:20px;
        margin-left:10px;
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
        </StyledWelcome>
    )
}

export default Home
