import React from 'react'
import styled from "styled-components"

const StyledDIv = styled.div`
background-color: #14213D;
height:100vh;
width:100%;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;

.wrapper {
    padding: 8px;
    width:80%;
    height:100%;
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 50%;
    @media (min-width:1024px) {
        margin-top: 30%;

        }
        @media (min-width:1440px) {
            margin-top: 20%;

        }


    h2{
        margin-bottom:25px;
        font-size: 1.5em;
        @media (min-width:768px) {
            font-size: 2em;

        }
        @media (min-width:1024px) {
            font-size: 2.4em;

        }
        @media (min-width:2560px) {
            font-size: 4em;

        }
    }
    h3 {
        font-size: 1.5em;
        text-align: center;
        @media (min-width:768px) {
            font-size: 2em;

        }
        @media (min-width:1024px) {
            font-size: 2.4em;

        }
        @media (min-width:2560px) {
            font-size: 4em;

        }
    }


    a {
        text-decoration: none;
        color:white;
        margin-top:20px;
        font-size:1.5em;

        @media (min-width:768px) {
            font-size: 2em;

        }
        @media (min-width:1024px) {
            font-size: 2.4em;

        }
        @media (min-width:2560px) {
            font-size: 4em;

        }
    }

}


`

const Contact = () => {
    return (
        <StyledDIv>
            <div className="wrapper">
            <h2 style={{color: "white"}}>CONTACT ME!</h2>
            <h3 style={{color: "white"}}>I'm available for freelance work.</h3>
            <h3 style={{color: "white"}}>Drop me a line if you fancy a chat.</h3>
                <a href="">mt.zngn@gmail.com</a>
            </div>
        </StyledDIv>
    )
}

export default Contact
