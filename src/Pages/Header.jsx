import React from "react";
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Header.css";
import ODER from "./ODER";
import RECIPES from "./RECIPES";
import CHEFS from "./CHEFS";
import Home from "./Home";

function Header() {
  return (
    <div className="Header">
      <Router>
        <div className="nav__bar">
          <Navbar className="nav_bar" variant="danger" expand="lg">
            <Navbar.Brand href="/">
              <img
                className="nav_photo font ml-3 .ml-sm-0"
                src={process.env.PUBLIC_URL + "/E.png"}
                alt="Logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto just py-1 px-md-5 ml-10 ml-lg-10">
                <Nav.Link href="/RECIPES" className="font ml-5 .ml-sm-0" >
                  RECIPES
                </Nav.Link>
                <Nav.Link href="/CHEFS" className="font ml-5 .ml-sm-0 ">
                  CHEFS
                </Nav.Link>
                <Nav.Link href="/ODER" className="font ml-5 .ml-sm-0 ">
                  ODER
                </Nav.Link>
              </Nav>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Welcome To My App"
                  className=" mr-sm-2"
                />
                
              </Form>
            </Navbar.Collapse>
          </Navbar>
        </div>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/ODER">
            <ODER />
          </Route>
          <Route exact path="/RECIPES">
            <RECIPES />
          </Route>
          <Route exact path="/CHEFS">
            <CHEFS />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Header;
