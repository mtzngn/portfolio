import React from 'react'
import styled from "styled-components";
import {Link} from "react-router-dom";


const Ul = styled.ul `
    list-style: none;
    display: flex;
    align-items: center;
    z-index: 20;
    flex-flow: column nowrap;
    background-color: #0A111F;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width:300px;
    padding-top: 8vh; 
    transition: transform 0.3s ease-in-out;
    

    li {
        padding: 20px 10px;
        color: #fff;
        width: 100%;
        text-align: center;
        a {
            text-decoration: none;
            color: #fff;
            font-size: 1.3em;
        }
    }
    li:hover {
        background-color: #e5e5e5;
        a {
            color: black;
        }
    }


`;
const RightNav = ({ open, setOpen }) => {

  const handleClick = () => {
  setOpen(!open)
  }
    return (
        <Ul open={open}>
      <li>
          <Link to="/portfolio" onClick={handleClick}>Home</Link>
        </li>
        <li>
          <Link to="/projects" onClick={handleClick}>Projects</Link>
        </li>
        <li>
          <Link to="/about" onClick={handleClick}>About</Link>
        </li>
        <li>
          <Link to="/cv" onClick={handleClick}>CV</Link>
        </li>
        <li>
          <Link to="/contact" onClick={handleClick}>Contact</Link>
        </li>
    </Ul>
    )
}

export default RightNav
