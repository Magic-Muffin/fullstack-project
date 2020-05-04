
import React, {} from 'react';
import {Nav, Navbar, Form, FormControl, Button} from 'react-bootstrap';


interface Props {
    
}

const AppNavbar: React.FC<Props> = () => {
    return(
        <Navbar bg="dark" variant="dark" fixed="top">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
    );
}

export default AppNavbar;