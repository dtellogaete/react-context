import 'bootstrap/dist/css/bootstrap.min.css';

import {NavbarComp} from '../components/Navbar';
import {Col, Container} from 'react-bootstrap';

const NotFound = () => {
    return (
        <> 
            <NavbarComp/>
            <Container style = {{ display: 'flex'}} className="back">
                <Col className="text-center">
                    <h1 className="text-center">Página no encontrada</h1><br></br>                    
                    <img src="https://cdn.pixabay.com/photo/2016/09/30/12/02/camera-1705135_960_720.jpg" alt='camera' width="213"  height="320"></img>                           
                </Col>                      
            </Container>                  
        </>
    );
}

export default NotFound;