
import React, {} from 'react';
import { Card, Jumbotron, Button } from 'react-bootstrap';

interface Props {
    
}

const HomePage: React.FC<Props> = () => {
    return(
        <Card>
            <Card.Body>
            <Jumbotron>
                <h1>Hello, world!</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p>
                <p>
                    <Button variant="primary">Learn more</Button>
                </p>
                </Jumbotron>
            </Card.Body>
        </Card>
    );
}

export default HomePage;