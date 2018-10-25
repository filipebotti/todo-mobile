import * as types from './index';

export function signUp(payload) {
    return {
        type: types.SIGN_UP,
        payload
    }
}