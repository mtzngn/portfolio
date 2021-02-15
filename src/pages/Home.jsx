import React from 'react'
import styled from "styled-components";
import SocialLinks from "../components/SocialLinks"



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
                <h1>Hi there, i'm Taha. </h1>
                <h1>Junior Web Developer</h1>
            </div>
            <SocialLinks />
        </StyledWelcome>
    )
}

export default Home
