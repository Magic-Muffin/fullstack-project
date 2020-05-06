
import React, {} from 'react';
import { Card } from 'react-bootstrap';
import AppRegisterForm from '../components/AppRegisterForm';

interface Props {
    
}

const RegisterPage: React.FC<Props> = () => {
    return(
        <Card>
            <Card.Body>
                <AppRegisterForm/>
            </Card.Body>
        </Card>
    );
}

export default RegisterPage;