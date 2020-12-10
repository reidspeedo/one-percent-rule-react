import React, {Component} from 'react';
import * as ReactBootStrap from "react-bootstrap"
import logographic from "../Images/logo-alone.png";

class NavBar extends Component {
    render() {
        return (
            <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <ReactBootStrap.Navbar.Brand href="#home"><img src={logographic} alt="logo-graphic"/>onePercent</ReactBootStrap.Navbar.Brand>
                <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                    <ReactBootStrap.Nav className="mr-auto">
                        <ReactBootStrap.Nav.Link href="#features">Features</ReactBootStrap.Nav.Link>
                        <ReactBootStrap.NavDropdown title="Rules" id="collasible-nav-dropdown">
                            <ReactBootStrap.NavDropdown.Item href="#action/3.1">One-Percent-Rule</ReactBootStrap.NavDropdown.Item>
                            <ReactBootStrap.NavDropdown.Item href="#action/3.2">Two-Percent-Rule</ReactBootStrap.NavDropdown.Item>
                        </ReactBootStrap.NavDropdown>
                    </ReactBootStrap.Nav>
                    <ReactBootStrap.Nav>
                        <ReactBootStrap.Nav.Link href="#deets">About</ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
                            Account
                        </ReactBootStrap.Nav.Link>
                    </ReactBootStrap.Nav>
                </ReactBootStrap.Navbar.Collapse>
            </ReactBootStrap.Navbar>
        );
    }
}

export default NavBar;