import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar , Container, Nav} from 'react-bootstrap';

export const NavbarComp = () => {
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
                <Nav.Link href="/" className="text-light">
                <h4>Home</h4>
                </Nav.Link>
                <Nav.Link  className="text-light">
                <h4>|</h4>
                </Nav.Link>
                <Nav.Link href="/favoritos" className="text-light">
                <h4>Favoritos</h4>
                </Nav.Link>
            </Nav>
            
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </>
    );
}

export default NavbarComp;