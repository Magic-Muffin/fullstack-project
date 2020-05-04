import React, {useState} from 'react';
import logo from './logo.svg';
import './css/App.css';
import {} from 'react-bootstrap';
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



function Navbar() {
  return (
    <div>Navbar</div>
  );
}

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="App">
      {Navbar()}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header>
    </div>
  );
}

export default App;
