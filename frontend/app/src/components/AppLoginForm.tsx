
import React, {useState} from 'react';
import AppSetting from '../config';
import { Form, Button } from 'react-bootstrap';
import {SHA256} from 'crypto-js';

interface Props {
    
}

const AppLoginForm: React.FC<Props> = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [processing, setProcessing] = useState<boolean>(false);

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        event.persist();
        const requestHeaders = new Headers();
        requestHeaders.append("Content-Type", "application/json");
        const data: string = JSON.stringify({
          email: email,
          password: SHA256(password)
        });
        const url = (process.env.NODE_ENV === 'production') ? "http://localhost:5000/GameInfo/" : "https://localhost:5001/GameInfo/";
        setProcessing(true);
        fetch(url, {
          method: 'POST',
          headers: requestHeaders,
          body: data
        }).then((response)=>{
            return response.json().then((res)=>{
              console.log(res);
              setProcessing(false);
            });
        });
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        event.preventDefault();
        switch (event.target.type) {
          case "email":
            setEmail(event.target.value);
            break;
          case "password":
            setPassword(event.target.value);
            break;   
        }
    }


    return(
    <>
    <Form onSubmit={handleSubmit}>
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
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      {(!processing) ? <Button variant="primary" type="submit">Login</Button> : <div>Processing</div>}
    </Form>
    </>
    );
}

export default AppLoginForm;