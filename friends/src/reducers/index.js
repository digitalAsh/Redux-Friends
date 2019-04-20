//import actions
import {
    LOGIN_START,
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
} from '../actions';

const initialState = {
    error: '',
    friends: [],
    isLoggingIn: false,
    errorStatusCode: null,
    fetchingData: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START: {
            return {
                ...state,
                isLoggingIn: true
            };
        }
        case FETCH_DATA_START: {
            return {
                ...state,
                error: '',
                fetchingData: true
            };
        }    
        case FETCH_DATA_SUCCESS: {
            return {
                ...state,
                error: '',
                fetchingData: false,
                friends: [ ...state.friends, ...action.payload ]
            };
        }
        default:
            return state;
    }
};

export default reducer;