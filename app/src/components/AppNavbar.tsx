
import React, {} from 'react';
import {Nav, Navbar, Form, FormControl, Button, NavItem} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTh } from '@fortawesome/free-solid-svg-icons'


interface Props {
    callback: (val:ClickEvent) => void;
}

const AppNavbar: React.FC<Props> = (props) => {
    function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent> 
        | React.MouseEvent<HTMLButtonElement, MouseEvent>
        | React.MouseEvent<SVGSVGElement, MouseEvent>) {
        event.preventDefault();
        console.log(event.currentTarget.tagName);
        var click: ClickEvent;
        if (event.currentTarget.tagName === "svg"){
            click = {id: "home"};
            props.callback(click);
        }
        if (event.currentTarget.tagName === "BUTTON"){
            click = {id: "search"};
            props.callback(click);
        }
    }

    return(
        <Navbar bg="dark" variant="dark" fixed="top">
            <NavItem><Navbar.Brand><FontAwesomeIcon onClick={handleClick} icon={faTh}/></Navbar.Brand></NavItem>
            <Navbar.Brand>Cool Beans</Navbar.Brand> 
            <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button onClick={handleClick} variant="outline-info"><FontAwesomeIcon icon={faSearch}/></Button>
            </Form>
        </Navbar>
    );
}

export default AppNavbar;