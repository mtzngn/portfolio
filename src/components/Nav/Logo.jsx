import React, { useState } from 'react';
import styled from "styled-components";

const StyledLogoL = styled.div`
width: 1.5rem;
height: 1.5rem;
position: fixed;
top: ${({ clicked })=> clicked ? '17px' : '15px'};
left: 31px;
z-index:20;
display: flex;
justify-content: space-around;
flex-flow: column nowrap;
@media (max-width:375px){
        visibility: hidden;
}
div {
    width: 1.5rem;
    height: 0.25rem;
    background-color: #e5e5e5;
    transition: all 0.1s ease-out;

    &:nth-child(2){
        transform: ${({ clicked })=> clicked ? 'rotate(150deg)' : 'rotate(90deg)'};
        width: ${({ clicked })=> clicked ? '1.6rem' : '1.5rem'};
    }
    &:nth-child(3){
        display: ${({ clicked })=> clicked ? 'flex' : 'none'};
        opacity: ${({ clicked })=> clicked ? 1 : 0};

    }
    @media (max-width:375px){
        visibility: hidden;
}

}

`

const StyledLogoWrapper = styled.div`
width: 3rem;
height: 3rem;
margin-top:6px;
z-index:20;
border-radius:50%;
border:1px solid #fff;
@media (max-width:375px){
   visibility: hidden;

}


`

const  Logo = () => {
    const [clicked, setClicked] = useState(false);

    return (
        <>
        <StyledLogoWrapper>
        <StyledLogoL  clicked={clicked} onClick={()=>{setClicked(!clicked)}}>
            <div />
            <div />
            <div />
        </StyledLogoL>
        </StyledLogoWrapper>
        </>
    )
}

export default Logo
