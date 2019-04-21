import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import Routes from './Routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
          <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
            <strong>Google</strong>
          </a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <NavItem eventKey={1} href="/page1">Page1</NavItem>
          <NavItem eventKey={2} href="/page2">Page2</NavItem>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
      <Routes/>
      </div>
       
    );
  }
}

export default App;
