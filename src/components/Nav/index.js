import React from "react";
import "./style.css";
import {Navbar , Nav} from "react-bootstrap"



function NavReturn() {
  return(
    <div style={{paddingTop:"70px"}}>

    <Navbar  className={"Nav"} fixed="top"  expand="lg">
  <Navbar.Brand className={"NavSub"} href="/">Samuel Greilick</Navbar.Brand>
  <Navbar.Toggle className={"NavSub"} aria-controls="basic-navbar-nav"/>
  <Navbar.Collapse className={"NavSub"} id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link className={"NavSub"} href="/">Home</Nav.Link>
      <Nav.Link className={"NavSub"} href="/contact">Contact</Nav.Link>
      <Nav.Link className={"NavSub"} href="/portfolio">Portfolio</Nav.Link>

    </Nav>

  </Navbar.Collapse>
</Navbar>
    </div>
    
  );
}

export default NavReturn;