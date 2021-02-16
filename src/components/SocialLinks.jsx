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
    display:flex;
    justify-content:center;
    align-items: center;
    border-radius: 50%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: 2px 4px 4px black;
    transition: 0.3s all linear;
}
.circleG {
    background-image: url(${BackgroundGit});
}
.circleL {
    background-image: url(${BackgroundLinked});
}
.circle:hover {
    background-color: #fff;
    box-shadow: 4px 8px 8px black;
    transform: translateY(-4px);

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
                    <a  target="_blank" href="https://www.github.com/mtzngn"><div className=" circle circleG"></div></a>
                </li>
                <li>
                    <a  target="_blank" href="https://www.linkedin.com/in/taha-zengin/"><div className="circle circleL"></div></a>
                </li>
            </ul>
        </StyledSocialLinks>
    )
}

export default SocialLinks