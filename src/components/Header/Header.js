import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand to="home">PC HOUSE</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Nav className="me-auto">
                                <CustomLink to="/home">HOME</CustomLink>
                                <CustomLink to="/review">REVIEWS</CustomLink>
                                <CustomLink to="/dashboard">DASHBOARD</CustomLink>
                                <CustomLink to="/blogs">BLOGS</CustomLink>
                                <CustomLink to="/about">ABOUT</CustomLink>
                            </Nav>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;