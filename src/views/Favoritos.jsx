import 'bootstrap/dist/css/bootstrap.min.css';

import {NavbarComp} from '../components/Navbar';
import {Row, Container, Col} from 'react-bootstrap';

import GalleryComponentFav from '../components/PhotosFavorites';

const Favoritos = () => {
    return (
        <> 
            <NavbarComp/>
            <Container style = {{ display: 'flex'}} className="back">
                <Col className="text-center">
                    <Row>
                        <h1 className="text-center"><b>Mayan Pic</b></h1>  
                    </Row>
                    <Row>               
                        <GalleryComponentFav />                   
                    </Row>                                      
                </Col>                                   
            </Container>                  
        </>
    );
}

export default Favoritos;
