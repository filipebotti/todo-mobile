import * as types from './index'

export function auth(payload) {
    return {
        type: types.AUTH,
        payload
    }
}