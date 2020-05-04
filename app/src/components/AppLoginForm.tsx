
import React, {useState} from 'react';
import AppSetting from '../config';


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
      <form onSubmit={handleSubmit} action={AppSetting.formAction}>
        <input type={"email"} onChange={handleChange} value={email}></input>
        <input type={"password"} onChange={handleChange} value={password}></input>
        <input type={"submit"} value={"Login"}></input>
      </form>
    </>
    );
}

export default AppLoginForm;