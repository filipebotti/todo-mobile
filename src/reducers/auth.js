import * as types from '../actions';

const initialState = {
    isAuthenticating: false,
    error: '',
    success: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case types.AUTH:
            return { ...state, isAuthenticating: true, error: ''}
        case types.AUTH_SUCCESS:
            return { ...state, isAuthenticating: false, success: true }
        case types.AUTH_FAIL:
            return { ...state, isAuthenticating: false, success:false, error: action.error }
        default:
            return state;
    }
}