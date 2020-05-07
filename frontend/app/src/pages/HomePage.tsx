
import React, {} from 'react';
import { Card, Jumbotron, Button } from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from '../actions';

interface Props {
    
}

const HomePage: React.FC<Props> = () => {
    const counter: any = useSelector((state:any) => {
        return state.counter;
    });
    const dispatch = useDispatch();
    return(
        <Card>
            <Card.Body>
                <Jumbotron>
                    <h1>Hello, world!</h1>
                    <h2>{counter}</h2>
                    <Button onClick={()=>dispatch(increment(2))}>+</Button>
                    <Button onClick={()=>dispatch(decrement())}>-</Button>
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