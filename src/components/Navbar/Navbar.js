import React from 'react';
import { useContext } from 'react';
import { Navbar,Nav,Button,Form, FormControl } from 'react-bootstrap';
import { User } from '../../context/UserContext';

const NavbarComponent = () => {
    const {LogOut} = useContext(User)
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="admin/home">Home</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link eventKey={2} onClick={() => LogOut()}>
                        Logout
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavbarComponent;