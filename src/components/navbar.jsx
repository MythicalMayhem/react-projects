

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
    return (
        <Navbar bg="dark" data-bs-theme="dark" style={{ fontSize: 'xx-large',marginBottom:'1cm'}}>
            <Container>
                <Nav className="me-auto" >
                    <Nav.Link style={{ color: 'white' }} href="/">Home</Nav.Link>
                    <Nav.Link style={{ color: 'white' }} href="/catalog">Catalog</Nav.Link>
                    <Nav.Link style={{ color: 'white' }} href="/profile">Log in </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;
