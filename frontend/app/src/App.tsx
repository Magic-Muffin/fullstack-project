import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './css/App.css';
// import AppSetting from './config';
import TextField from './components/TextField';
import useFetch from './hooks/useFetch';
import AppOverlay from './components/AppOverlay';
import AppNavbar from './components/AppNavbar';
import AppLoginForm from './components/AppLoginForm';
import { Container, Card, Button } from 'react-bootstrap';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';

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


function App() {
  
  const [loaded, setLoaded] = useState<boolean>(false);
  const [showOverlay, setShowOverlay] = useState<boolean>(false);
  const [page, setPage] = useState<string>("home");

  useEffect(()=>{
    setLoaded(true);
  }, []);

  useFetch("https://swapi.dev/api/planets/1/?format=wookiee");


  function resolvePage(){
    switch (page) {
      case "home":
        return (
          <Card>
            <Card.Img className="App-logo" variant="top" src={logo} />
            <Card.Body>
              <Card.Title>Some Info</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore exercitationem repudiandae eum aliquam sunt consectetur voluptate nisi beatae. Voluptatibus incidunt, veritatis alias dolorum ipsum dolores blanditiis ipsa est sapiente repellendus.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        );
      case "login":
        return (
        <Card>
          <Card.Body>
            <AppLoginForm/>
          </Card.Body>
        </Card>
        );
      case "settings":
        return (
          <Card>
            <Card.Body>
              <div className={"App-body"}>
                <TextField text="something"/>
                <AppOverlay show={showOverlay} callback={(s)=> setShowOverlay(s)}/>
              </div>
            </Card.Body>
          </Card>
        );
      default:
        return (
        <Card>
          {/* <Card.Img className="App-logo" variant="top" src={logo} /> */}
          <Card.Body>
            <Card.Title>Sorry, but this page does not exist.</Card.Title>
            {/* <Card.Text>
            </Card.Text> */}
            <Button variant="primary">Go back</Button>
          </Card.Body>
        </Card>
        );
    }
  }

  function handleNavbarCallback(val:ClickEvent) {
    switch (val.id) {
      case "home":
        setShowOverlay(!showOverlay);
        console.log(showOverlay); // Open/close overlay
        setPage("home");
        break;
    case "search":
      console.log("search");  
      // setPage("")
      break;
    case "settings":
      console.log("settings");  
      setPage("settings");
      break;
    case "account":
      console.log("account");
      setPage("login");
      break;
    
      default:
        break;
    }
  }

  return (
    <BrowserRouter>
      <Container className="App">
        <AppNavbar callback={handleNavbarCallback}/>
        <Switch>
          {/* {{loaded} && SidebarExampleSidebar()} */}

          <Route path="/" exact component={HomePage}/>
          <Route path="/login" exact component={LoginPage}/>
          <Route path="/register" exact component={RegisterPage}/>
          {/* {resolvePage()} */}
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
