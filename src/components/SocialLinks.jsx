import React from 'react'
import styled from "styled-components";
import BackgroundGit from '../assets/github.png';
import BackgroundLinked from '../assets/linkedn.png';

const StyledSocialLinks = styled.div`
a{
    text-decoration:none;
    color: rgb(255, 255, 255);
}
ul {
    li {
        list-style: none;
        margin-left:20px;
    }
    display: flex;
}
.circle {
    width:75px;
    height:75px;
    img {
        width:100%;
        box-shadow: 2px 4px 4px black;
        border-radius: 50%;
        transition: 0.3s all linear;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        display:flex;
        justify-content:center;
        align-items: center;
    }
    img:hover {
        box-shadow: 4px 8px 8px black;
        transform: translateY(-4px);
        color: #fff;
    }
}

        @media(min-width:765px){
            margin-top: 15px;
        }
        @media(min-width:1024px){
            margin-top: 25px;
        }
        @media(min-width:1440px){
            margin-top: 30px;
        }
`
const SocialLinks = () => {
    return (
        <StyledSocialLinks>
            <ul>
                <li>
                    <a  target="_blank" href="https://www.github.com/mtzngn" rel="noreferrer"><div className=" circle circleG">
                        <img src={BackgroundGit}></img> </div></a>
                </li>
                <li>
                    <a  target="_blank" href="https://www.linkedin.com/in/taha-zengin/" rel="noreferrer"><div className="circle circleL">
                        <img src={BackgroundLinked}></img> </div></a>
                </li>
            </ul>
        </StyledSocialLinks>
    )
}

export default SocialLinks