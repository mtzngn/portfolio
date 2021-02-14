import React from 'react'
import styled from "styled-components";


const StyledWelcome = styled.div`
width:100%;
height: 92vh;
background-color: red;
`


const Home = () => {
    return (
        <StyledWelcome>
            <div className="section">
                <div className="title">
                    <h1>Hi there, i'm Taha. </h1>
                </div>
                <div className="subtitle">
                <h1>I build apps for web</h1>
                </div>
                <div className="subtitle2">
                    <div className="subtitles">
                        <h2>Coder</h2>
                        <h2>Learner</h2>
                        <h2>Engineer</h2>
                    </div>
                </div>

            </div>
        </StyledWelcome>
    )
}

export default Home
