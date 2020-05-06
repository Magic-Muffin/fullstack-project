
import React, {useState} from 'react';
import { Card } from 'react-bootstrap';
import AppLoginForm from '../components/AppLoginForm';

interface Props {
    
}

const LoginPage: React.FC<Props> = () => {
    return(
        <Card>
            <Card.Body>
                <AppLoginForm/>
            </Card.Body>
        </Card>
    );
}

export default LoginPage;