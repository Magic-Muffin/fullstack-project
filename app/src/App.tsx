import React, {useState, useEffect, useRef,RefObject} from 'react';
import logo from './logo.svg';
import './css/App.css';
import {Nav, Navbar,Button, Form, FormControl, Overlay} from 'react-bootstrap';
import AppSetting from './config';

function handleSubmit(event: React.FormEvent<HTMLElement>)
{
  event.preventDefault();
  if (event.target){
    console.log(event.target);
  }
}

function handleChange(event: React.ChangeEvent<HTMLElement>)
{
  event.preventDefault();
  if (event.target.nodeValue === "email" ){
    console.log(event.target);
  }
}

function loginForm(props: any)
{
  return (
    <>
      <form onSubmit={handleSubmit} action={AppSetting.formAction}>
        <input type={"email"} onChange={handleChange}></input>
        <input type={"password"} onChange={handleChange}></input>
        <input type={"submit"} value={"Login"}></input>
      </form>
    </>
  );
}



function NavbarComponent() {
  return (
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


const SidebarExampleSidebar = () => {
  const [visible, setVisible] = useState(false)
  if (visible){
    return (
      <>
      <div className="sidebar">
        <a className="active" href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
      
      <div className="content">
        ..
      </div> 
      </>
    )
  }
  return <button onClick={()=>setVisible(true)}>Sidebar</button>;
}
function OverlayExample() {
  const [show, setShow] = useState(false);
  const el = useRef<any>(null);
  const onButtonClick = () => {

    if(el && el.current) {
      setShow(!show);
    } 
  };

  return (
    <>
      <Button variant="danger" ref={el} onClick={onButtonClick}>
        Click me to see
      </Button>
      <Overlay target={el.current} show={show} placement="right">
        {({
          placement,
          scheduleUpdate,
          arrowProps,
          outOfBoundaries,
          show: _show,
          ...props
        }) => (
          <div
            {...props}
            style={{
              backgroundColor: 'rgba(255, 100, 100, 0.85)',
              padding: '2px 10px',
              color: 'white',
              borderRadius: 3,
              ...props.style,
            }}
          >
            Simple tooltip
          </div>
        )}
      </Overlay>
    </>
  );
}

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loaded, setLoaded] = useState(false);
  useEffect(()=>{

    setLoaded(true);
  }, []);
  return (
    
    <div className="App">
      {NavbarComponent()}
      {SidebarExampleSidebar()}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        
      </header>
      <div className={"App-body"}>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        {OverlayExample()}
      </div>
    </div>
  );
}

export default App;
