import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './css/App.css';
// import AppSetting from './config';
import TextField from './components/TextField';
import useFetch from './hooks/useFetch';
import AppOverlay from './components/AppOverlay';
import AppNavbar from './components/AppNavbar';
import AppLoginForm from './components/AppLoginForm';
import { Container, Card, Button, CardGroup } from 'react-bootstrap';

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

  useEffect(()=>{
    setLoaded(true);
  }, []);

  useFetch("https://swapi.dev/api/planets/1/?format=wookiee");


  function handleNavbarCallback(val:ClickEvent) {
    switch (val.id) {
      case "home":
        setShowOverlay(!showOverlay);
        console.log(showOverlay); // Open/close overlay
        break;
    
    case "search":
      console.log("search");  
      break;
    
      default:
        break;
    }
  }


  return (
    
    <div className="App">
      <Container>
        <AppNavbar callback={handleNavbarCallback}/>
        {{loaded} && SidebarExampleSidebar()}
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header> */}
        {/* <CardGroup> */}
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
          <Card>
            <Card.Body>
              <AppLoginForm/>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <div className={"App-body"}>
                <TextField text="something"/>
                <AppOverlay show={showOverlay} callback={(s)=> setShowOverlay(s)}/>
              </div>
            </Card.Body>
          </Card>
        {/* </CardGroup> */}
      </Container>
    </div>
  );
}

export default App;
