import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './css/App.css';
// import AppSetting from './config';
import TextField from './TextField';
import useFetch from './hooks/useFetch';
import AppOverlay from './components/AppOverlay';
import AppNavbar from './components/AppNavbar';
import AppLoginForm from './components/AppLoginForm';

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
  
  const [loaded, setLoaded] = useState(false);
  useEffect(()=>{
    setLoaded(true);
  }, []);

  useFetch("https://swapi.dev/api/planets/1/?format=wookiee");
  return (
    
    <div className="App">
      <AppNavbar/>
      {{loaded} && SidebarExampleSidebar()}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        
      </header>
      <div className={"App-body"}>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <AppLoginForm></AppLoginForm>
        <TextField text="something"/>
        <AppOverlay></AppOverlay>
      </div>
    </div>
  );
}

export default App;
