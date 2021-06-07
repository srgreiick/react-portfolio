import React from "react";
import "./style.css";
import {Navbar , Nav} from "react-bootstrap"



function NavReturn() {
  return(
    <div style={{paddingTop:"70px"}}>

    <Navbar  className={"Nav"} fixed="top"  expand="lg">
  <Navbar.Brand href="/">Samuel Greilick</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link  href="/">Home</Nav.Link>
      <Nav.Link href="/contact">Contact</Nav.Link>
      <Nav.Link href="/portfolio">Portfolio</Nav.Link>

    </Nav>

  </Navbar.Collapse>
</Navbar>
    </div>
    
  );
}

export default NavReturn;