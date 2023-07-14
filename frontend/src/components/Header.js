import React from 'react';
import { Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

const Header = (props) => {
    return (
        <Navbar data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand>{props.title}</Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default Header;