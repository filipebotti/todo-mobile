import * as types from '../actions';

const initialState = {
    name: '',
    isRegistering: false,
    error: ''
}

export default function(state = initialState, action) {
    switch(action.type) {
        case types.AUTH_SUCCESS:
            return { ...state, name: action.user ? action.user.name : '' };
        case types.SIGN_UP:
            return { ...state, isRegistering: true, error: '' }
        case types.SIGN_UP_SUCCESS:
            return { ...state, isRegistering: false }
        case types.SIGN_UP_FAIL: 
            return { ...state, isRegistering: false, error: action.error }        
        default:
            return state;
    }
}