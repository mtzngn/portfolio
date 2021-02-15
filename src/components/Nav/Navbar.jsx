import React from 'react';
import styled from "styled-components";
import Burger from './Burger';
import Logo from "./Logo"

const Nav = styled.nav`
width:100%;
height:8vh;
background-color: #0A111F;
border-bottom: 1px solid #fff;
padding: 0 20px;
display: flex;
justify-content: space-between;
z-index: 99;

.logo {
    padding: 15px 0;
}

`
const Navbar = () => {
    return (
        <Nav>
            <Logo />
            <Burger />

        </Nav>
    )
}

export default Navbar