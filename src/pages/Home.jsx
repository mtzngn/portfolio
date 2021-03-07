import React from 'react'
import styled from "styled-components";
import SocialLinks from "../components/SocialLinks"
import Typist from 'react-typist';
import Canvas from "../components/Canvas/Canvas"



const StyledWelcome = styled.div`
.canvas-wrapper {
    width:100%;
    height:92vh;
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

.title-wrapper {
    height:20%;
    h1{
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        -o-user-select: none;
        user-select: none;
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
    .glitch {
	 position: relative;
	 color: white;
	 letter-spacing: 0.2em;

	 animation: glitch-skew 1s infinite linear alternate-reverse;
}
 .glitch::before {
	 content: attr(data-text);
	 position: absolute;
	 top: 0;
	 left: 0;
	 width: 100%;
	 height: 100%;
	 left: 2px;
	 text-shadow: -2px 0 #ff00c1;

	 clip: rect(44px, 450px, 56px, 0);

	 animation: glitch-anim 5s infinite linear alternate-reverse;
}
 .glitch::after {
	 content: attr(data-text);
	 position: absolute;
	 top: 0;
	 left: 0;
	 width: 100%;
	 height: 100%;
	 left: -2px;
	 text-shadow: -2px 0 #00fff9, 2px 2px #ff00c1;
	 animation: glitch-anim2 1s infinite linear alternate-reverse;
}

 @keyframes glitch-anim {
	 0% {
		 clip: rect(90px, 9999px, 93px, 0);
		 transform: skew(0.13deg);
	}
	 5% {
		 clip: rect(44px, 9999px, 30px, 0);
		 transform: skew(0.23deg);
	}
	 10% {
		 clip: rect(94px, 9999px, 77px, 0);
		 transform: skew(0.01deg);
	}
	 15% {
		 clip: rect(90px, 9999px, 15px, 0);
		 transform: skew(0.79deg);
	}
	 20% {
		 clip: rect(63px, 9999px, 49px, 0);
		 transform: skew(0.23deg);
	}
	 25% {
		 clip: rect(2px, 9999px, 75px, 0);
		 transform: skew(0.28deg);
	}
	 30% {
		 clip: rect(56px, 9999px, 36px, 0);
		 transform: skew(0.04deg);
	}
	 35% {
		 clip: rect(81px, 9999px, 27px, 0);
		 transform: skew(0.63deg);
	}
	 40% {
		 clip: rect(53px, 9999px, 50px, 0);
		 transform: skew(0.07deg);
	}
	 45% {
		 clip: rect(59px, 9999px, 33px, 0);
		 transform: skew(0.47deg);
	}
	 50% {
		 clip: rect(4px, 9999px, 97px, 0);
		 transform: skew(0.16deg);
	}
	 55% {
		 clip: rect(57px, 9999px, 95px, 0);
		 transform: skew(0.17deg);
	}
	 60% {
		 clip: rect(72px, 9999px, 84px, 0);
		 transform: skew(0.7deg);
	}
	 65% {
		 clip: rect(19px, 9999px, 91px, 0);
		 transform: skew(0.33deg);
	}
	 70% {
		 clip: rect(3px, 9999px, 63px, 0);
		 transform: skew(0.87deg);
	}
	 75% {
		 clip: rect(40px, 9999px, 92px, 0);
		 transform: skew(0.24deg);
	}
	 80% {
		 clip: rect(31px, 9999px, 37px, 0);
		 transform: skew(0.84deg);
	}
	 85% {
		 clip: rect(33px, 9999px, 41px, 0);
		 transform: skew(0.87deg);
	}
	 90% {
		 clip: rect(33px, 9999px, 12px, 0);
		 transform: skew(0.22deg);
	}
	 95% {
		 clip: rect(64px, 9999px, 15px, 0);
		 transform: skew(0.33deg);
	}
	 100% {
		 clip: rect(48px, 9999px, 4px, 0);
		 transform: skew(0.29deg);
	}
}
 @keyframes glitch-anim2 {
	 0% {
		 clip: rect(15px, 9999px, 53px, 0);
		 transform: skew(0.05deg);
	}
	 5% {
		 clip: rect(20px, 9999px, 83px, 0);
		 transform: skew(0.67deg);
	}
	 10% {
		 clip: rect(92px, 9999px, 92px, 0);
		 transform: skew(0.38deg);
	}
	 15% {
		 clip: rect(97px, 9999px, 68px, 0);
		 transform: skew(0.48deg);
	}
	 20% {
		 clip: rect(24px, 9999px, 98px, 0);
		 transform: skew(0.7deg);
	}
	 25% {
		 clip: rect(61px, 9999px, 30px, 0);
		 transform: skew(0.1deg);
	}
	 30% {
		 clip: rect(26px, 9999px, 66px, 0);
		 transform: skew(0.09deg);
	}
	 35% {
		 clip: rect(25px, 9999px, 77px, 0);
		 transform: skew(0.4deg);
	}
	 40% {
		 clip: rect(25px, 9999px, 93px, 0);
		 transform: skew(0.86deg);
	}
	 45% {
		 clip: rect(94px, 9999px, 9px, 0);
		 transform: skew(0.12deg);
	}
	 50% {
		 clip: rect(95px, 9999px, 51px, 0);
		 transform: skew(0.9deg);
	}
	 55% {
		 clip: rect(42px, 9999px, 9px, 0);
		 transform: skew(0.4deg);
	}
	 60% {
		 clip: rect(8px, 9999px, 92px, 0);
		 transform: skew(0.61deg);
	}
	 65% {
		 clip: rect(92px, 9999px, 95px, 0);
		 transform: skew(0.41deg);
	}
	 70% {
		 clip: rect(98px, 9999px, 100px, 0);
		 transform: skew(0.69deg);
	}
	 75% {
		 clip: rect(74px, 9999px, 13px, 0);
		 transform: skew(0.1deg);
	}
	 80% {
		 clip: rect(100px, 9999px, 9px, 0);
		 transform: skew(0.5deg);
	}
	 85% {
		 clip: rect(1px, 9999px, 57px, 0);
		 transform: skew(0.67deg);
	}
	 90% {
		 clip: rect(1px, 9999px, 58px, 0);
		 transform: skew(0.89deg);
	}
	 95% {
		 clip: rect(25px, 9999px, 69px, 0);
		 transform: skew(0.34deg);
	}
	 100% {
		 clip: rect(60px, 9999px, 25px, 0);
		 transform: skew(0.99deg);
	}
}
 @keyframes glitch-skew {
	 0% {
		 transform: skew(0deg);
	}
	 10% {
		 transform: skew(0deg);
	}
	 20% {
		 transform: skew(3deg);
	}
	 30% {
		 transform: skew(-1deg);
	}
	 40% {
		 transform: skew(5deg);
	}
	 50% {
		 transform: skew(-2deg);
	}
	 60% {
		 transform: skew(1deg);
	}
	 70% {
		 transform: skew(2deg);
	}
	 80% {
		 transform: skew(1deg);
	}
	 90% {
		 transform: skew(-3deg);
	}
	 100% {
		 transform: skew(-3deg);
	}
}
 
    
}


`
const Home = () => {

    return (
        <StyledWelcome>
            <div className="title-wrapper">
                <Typist avgTypingSpeed={5} cursor={{ show: false}}>
                    <h1>Hi there, i'm Taha. </h1>
                    <Typist.Delay ms={500} />
                    <h1>Junior Full-Stack Web Developer</h1>
                    <Typist.Backspace count={31} delay={600} />
                    <h1>Engineer</h1>
                    <Typist.Backspace count={8} delay={600} />
                    <h1>Traveller</h1>
                    <Typist.Backspace count={9} delay={600} />
                    <h1 className="glitch" data-text="{Coder}">{"{Coder}"}</h1>
                </Typist>
            </div>
            <SocialLinks />
            <div className="canvas-wrapper">
                <Canvas />
            </div>
        </StyledWelcome>
    )
}

export default Home
