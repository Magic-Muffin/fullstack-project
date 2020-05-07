import React, {useState, useEffect} from 'react';
import './css/App.css';
// import AppSetting from './config';
import useFetch from './hooks/useFetch';
import AppNavbar from './components/AppNavbar';
import { Container } from 'react-bootstrap';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';



function App() {
  
  const [, setLoaded] = useState<boolean>(false);
  const [showOverlay, setShowOverlay] = useState<boolean>(false);
  const [, setPage] = useState<string>("home");

  useEffect(()=>{
    setLoaded(true);
  }, []);

  const url = (process.env.NODE_ENV === 'production') ? "http://localhost:5000/WeatherForecast/" : "https://localhost:5001/WeatherForecast/";
  useFetch(url);
  
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
          <Route path="/" exact component={HomePage}/>
          <Route path="/login" exact component={LoginPage}/>
          <Route path="/register" exact component={RegisterPage}/>
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
