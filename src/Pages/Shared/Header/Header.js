import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Banner from "../../Home/Banner/Banner";
import Experts from "../../Home/Experts/Experts";
import Services from "../../Home/Services/Services";
import logo from "../../../images/logo.png";

const Header = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              height="30"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
