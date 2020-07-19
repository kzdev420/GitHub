import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

import { SearchBox } from "../SearchBox";

export const MainHeader = () => {
  return (
    <div className="header">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <SearchBox className="style_1" placeholder="Search or jump to..." />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#PullRequests">Pull Requests</Nav.Link>
            <Nav.Link href="#Issues">Issues</Nav.Link>
            <Nav.Link href="#MarketPlace">MarketPlace</Nav.Link>
            <Nav.Link href="#Explore">Explore</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
