//import actions
import {
    LOGIN_START
} from '../actions';

const initialState = {
    error: '',
    friends: [],
    isLoggingIn: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START: {
            return {
                ...state,
                isLoggingIn: true
            }
        }
        default:
            return state;
    }
};

export default reducer;