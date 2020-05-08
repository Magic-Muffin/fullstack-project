
import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import {SHA256} from 'crypto-js';

interface Props {
    
}

const AppLoginForm: React.FC<Props> = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [processing, setProcessing] = useState<boolean>(false);

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        event.persist();

        var requestHeaders = new Headers();
        requestHeaders.set("Content-Type", "application/json");

        const data: string = JSON.stringify({
          email: email,
          password: SHA256(password)
        });

        const url = (process.env.NODE_ENV === 'production') ? "http://localhost:5000/WeatherForecast/" : "https://localhost:5001/WeatherForecast/";
        setProcessing(true);
        fetch(url, {
          method: 'POST',
          headers: requestHeaders,
          body: data
        }).then((response)=>{
          response.json().then((res)=>{
            console.log(res);
            setProcessing(false);
          })
        });
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        event.preventDefault();
        switch (event.target.type) {
          case "username":
            setUsername(event.target.value);
            break;
          case "email":
            setEmail(event.target.value);
            break;
          case "password":
            setPassword(event.target.value);
            break;
          case "confirmPassword":
            setConfirmPassword(event.target.value);
            break;

        }
    }

    return(
    <>
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="username" placeholder="Username" onChange={handleChange} value={username}/>
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={handleChange} value={email}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  onChange={handleChange} value={password}/>
      </Form.Group>

      <Form.Group controlId="formBasicConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  onChange={handleChange} value={confirmPassword}/>
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
      {/* <form onSubmit={handleSubmit} action={AppSetting.formAction}>
        <input type={"email"} onChange={handleChange} value={email}></input>
        <input type={"password"} onChange={handleChange} value={password}></input>
        <input type={"submit"} value={"Login"}></input>
      </form> */}
    </>
    );
}

export default AppLoginForm;