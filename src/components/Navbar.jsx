import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar , Container, Nav} from 'react-bootstrap';

import { useContext } from 'react';

import Context from '../context';

import { Link } from "react-router-dom";

export const NavbarComp = () => {

    const { favorites} = useContext(Context);
    console.log(favorites)

    return (
        <>       
        <Navbar bg="success" expand="lg" collapseOnSelect>
        <Container fluid>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-2"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <Nav.Link  className="text-light">
                <Link to="/" style={{ color: '#FFFFFF', textDecoration: 'none' }}><h4>Home</h4></Link>
                </Nav.Link>
                <Nav.Link  className="text-light">
                <h4>|</h4>
                </Nav.Link>
                <Nav.Link className="text-light">
                <Link to="/favoritos" style={{ color: '#FFFFFF', textDecoration: 'none' }}>
                    <h4>Favoritos ({favorites.length})</h4>
                </Link>                    
                </Nav.Link>
            </Nav>
            
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </>
    );
}

export default NavbarComp;