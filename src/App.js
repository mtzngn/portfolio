import logo from './logo.svg';
import './App.css';
import styled, { css } from 'styled-components'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
 
import '@trendmicro/react-sidenav/dist/react-sidenav.css';


const App = () => {
  return (
    <div className="App">

      <h1>hello world</h1>
    <Button>Click mee</Button>
    <Button primary>Click mee</Button>
    </div>
  );
}
const Button = styled.button`  background: transparent;
border-radius: 3px;
border: 2px solid palevioletred;
color: palevioletred;
margin: 0 1em;
padding: 0.25em 1em;

${props =>
  props.primary &&
  css`
    background: palevioletred;
    color: white;
  `};`

export default App;
