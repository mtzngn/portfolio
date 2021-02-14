import React from "react";
import Navbar from "./Nav/Navbar";
import styled from "styled-components";
import {BrowserRouter as Router, Route} from "react-router-dom";
 
const StyledApp = styled.div`
background-color: #000;
height: 100vh;
`

const App = () => {
  return (
    <Router>
    <StyledApp className="App">
      <Navbar />

      <Route exact path="/">
        <h1>HOMEE</h1>
      </Route>
      <Route path="/projects">
        <h1>Projects</h1>
      </Route>
      <Route path="/about">
        <h1>About</h1>
      </Route>
      <Route path="/cv">
       <h1>CV</h1>
      </Route>
      <Route path="/contact">
        <h1>Contact</h1>
      </Route>
    </StyledApp>
    </Router>
  );
}


export default App;
