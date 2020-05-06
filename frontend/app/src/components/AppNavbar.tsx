
import React, {} from 'react';
import {Nav, Navbar, Form, FormControl, Button, NavItem} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTh, faCog, faUser } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';


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

    function handleSelect(eventKey: string, event: any) {
        console.log(eventKey, event);
        var click: ClickEvent = {id: ""};
        switch (eventKey) {
            case "link-home":
                click = {id: "home"};
                break;
            case "link-settings":
                click = {id: "settings"};
                break;
            case "link-account":
                click = {id: "account"};
                break;
        
            default:
                break;
        }
        props.callback(click);
    }

    return(
        <Navbar bg="dark" variant="dark" fixed="top">
            <NavItem><Navbar.Brand><FontAwesomeIcon onClick={handleClick} icon={faTh}/></Navbar.Brand></NavItem>
            <Link to="/"><Navbar.Brand>Cool Beans</Navbar.Brand></Link>
            <Nav className="mr-auto">
            <Nav.Link as="li"><Link to="/">Home</Link></Nav.Link>
            <Nav.Link as="li"><Link to="/login">Login</Link></Nav.Link>
            <Nav.Link as="li"><Link to="/register">Register</Link></Nav.Link>
            </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button onClick={handleClick} variant="outline-info"><FontAwesomeIcon icon={faSearch}/></Button>
                </Form>
            <Nav className="mr-auto"></Nav>
            <NavItem><Nav.Link onSelect={handleSelect} eventKey={"link-settings"}><FontAwesomeIcon onClick={handleClick} icon={faCog}/></Nav.Link></NavItem>
            <NavItem><Nav.Link onSelect={handleSelect} eventKey={"link-account"}><FontAwesomeIcon onClick={handleClick} icon={faUser}/></Nav.Link></NavItem>
        </Navbar>
    );
}

export default AppNavbar;