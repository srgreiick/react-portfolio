import React from "react";
import {Navbar ,Button, FormControl, Nav, Form} from "react-bootstrap"



function NavReturn() {
  return(
    <div style={{paddingTop:"20px"}}>

    <Navbar fixed="top" bg="light" expand="lg">
  <Navbar.Brand href="/">Samuel Greilick</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/contact">Contact</Nav.Link>
      <Nav.Link href="/portfolio">Portfolio</Nav.Link>

    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search For Employee" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
    </div>
    
  );
}

export default NavReturn;