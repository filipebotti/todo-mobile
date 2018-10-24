import * as types from '../actions';

const initialState = {
    name: ''
}

export default function(state = initialState, action) {
    switch(action.type) {
        case types.AUTH_SUCCESS:
            return { name: action.user.name };
        default:
            return state;
    }
}