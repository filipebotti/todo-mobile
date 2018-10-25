import * as types from './index';

export function signOut() {
    console.log("sing out");
    return {
        type: types.SIGN_OUT
    }
}