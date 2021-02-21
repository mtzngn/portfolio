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
    height:80%;
    border: 1px solid white;
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    h2 {
        margin: 10px;
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



    p {
        color: white;
        font-size: 14px;
        text-align: center;
        @media (min-width:768px) {
            font-size: 20px;

        }
        @media (min-width:1024px) {
            font-size: 24px;

        }
        @media (min-width:2560px) {
            font-size: 48px;

        }

        .tech {
            font-weight: bolder;
        }
    }
}


`

const About = () => {
    return (
        <StyledDIv>
            <div className="wrapper">
                <h2 style={{color: "white"}}>ABOUT ME</h2>
                <p>I wanted to get in to software development for long time and finally i was able to make my dream come true!
                </p>
                <br/>
                <p>I studied Mechanical Engineering and worked over 4 years in the industry, 
                    i believe it had huge impact on my porblem solving skills while programming.
                </p>
                <br/>
                <p>I finished Master Coding Bootcamp from Code Nation where we learned full stack web development 
                    using <span className="tech">JavaScript</span>,<span className="tech"> React</span>,
                    <span className="tech"> Express</span>,<span className="tech"> MongoDB</span>,<span className="tech"> Node.js</span> and
                    <span className="tech"> MySQL</span>.
                    We also learned how to build REST APIs and we build several projects during the course mostly can be found on my github.
                    Before bootcamp, i was trying to learn coding on my own where i got to learn basics and understanded the fundementals of 
                    <span className="tech"> C </span>and<span className="tech"> Java</span>.
                    Also i leanrt on my own <span className="tech">Python</span> and built and app with <span className="tech">PyQt5</span>, 
                    i studied the basics of <span className="tech">DJANGO</span> framework.
                </p>
                <br/>
                <p>We worked indivudally and as team, we learned industry standarts such as KANBAN, Sprints, pair programming and more...
                </p>
                <br/>
                <p>I loved every moment of the bootcamp where i was challenged with learning new technologies and learn how they work together and it amazed me!
                    I believe my professional background, my problem solving skills and my hands on experience would be very good asset for any company.
                </p>
            </div>
        </StyledDIv>
    )
}

export default About