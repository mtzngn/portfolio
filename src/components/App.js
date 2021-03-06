import React from "react";
import Navbar from "./Nav/Navbar";
import styled from "styled-components";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "../pages/Home"
import Projects from "../pages/Projects"
import About from "../pages/About"
import Cv from "../pages/Cv"
import Contact from "../pages/Contact"

 
const StyledApp = styled.div`
background-color: rgba(0, 0, 0, 0.1);
height: fit-content;
`

const App = () => {
  return (
    <Router>
    <StyledApp className="App">
      <Navbar />

      <Route exact path="/portfolio">
        <Home />
      </Route>
      <Route path="/projects">
        <Projects />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/cv">
         <Cv />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
    </StyledApp>
    </Router>
  );
}


export default App;
