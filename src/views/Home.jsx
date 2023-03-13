import 'bootstrap/dist/css/bootstrap.min.css';

import {NavbarComp} from '../components/Navbar';
import {Row, Container, Col} from 'react-bootstrap';

import GalleryComponent from '../components/Photos';

const Home = () => {
    return (
        <> 
            <NavbarComp/>
            <Container style = {{ display: 'flex'}} className="back">
                <Col className="text-center">
                    <Row>
                        <h1 className="text-center"><b>Mayan Pic</b></h1>  
                    </Row>
                    <Row>                                   
                        <GalleryComponent />                                                         
                    </Row>                                      
                </Col>                                   
            </Container>                  
        </>
    );
}

export default Home;