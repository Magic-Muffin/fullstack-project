// import {Action} from 'redux';


export const increment = (nr: number=1) => {
    return {
        type: "INCREMENT",
        payload: nr
    }
};

export const decrement  = () => {
    return {
        type: "DECREMENT"
    }
};