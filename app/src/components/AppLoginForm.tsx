
import React, {useState} from 'react';
import AppSetting from '../config';
import { Form, Button } from 'react-bootstrap';


interface Props {
    
}

const AppLoginForm: React.FC<Props> = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        event.preventDefault();
        if (event.target.type === "email") setEmail(event.target.value);
        if (event.target.type === "password") setPassword(event.target.value);
    }

    return(
    <>
    <Form>
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
      <Button variant="primary" type="submit">
        Login
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