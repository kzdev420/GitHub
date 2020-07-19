import React from "react";
import { Navbar, Nav } from "react-bootstrap";

import { SearchBox } from "../SearchBox";

export const SecondaryHeader = () => {
  return (
    <div className="header">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <div className="container">
          <Navbar.Brand href="#home">
            <img
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#PullRequests">why Github</Nav.Link>
              <Nav.Link href="#Issues">Team</Nav.Link>
              <Nav.Link href="#MarketPlace">Enterprise</Nav.Link>
              <Nav.Link href="#Explore">Explore</Nav.Link>
            </Nav>
            <SearchBox className="style_1" placeholder="Search Github" />
            <Nav>
              <Nav.Link href="#deets">Sign in</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Sign Up
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};
