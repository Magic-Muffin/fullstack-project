import {Action} from 'redux';

const loggedReducer = (state=false, action: Action<any>) => {
    switch (action.type) {
        case "LOGIN":
            return !state;
        default:
            return state;
    }
}

export default loggedReducer;