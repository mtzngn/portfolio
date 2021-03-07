import React, { useState } from 'react';
import styled from "styled-components";
import Burger from './Burger';
import Logo from "./Logo"

const Nav = styled.nav`
width:100%;
height:75px;
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
    const [open, setOpen] = useState(false);

    return (
        <Nav>
            <Logo />
            <Burger open={open} setOpen={setOpen}/>

        </Nav>
    )
}

export default Navbar
