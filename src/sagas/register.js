import * as types from '../actions';
import { takeLatest, put } from 'redux-saga/effects';
import API from '../services/api';

function* signUp(action) {
    try {
        const data = yield API.signUp(action.payload);

        API.USER.token = data.access_token;
        const { username, password } = action.payload;
        API.USER.storeCredentials({ username, password });

        yield put({ type: types.SIGN_UP_SUCCESS });
    } catch(ex) {
        yield put({ type: types.SIGN_UP_FAIL, error: ex });
    }
}

export default function* () {
    yield takeLatest(types.SIGN_UP, signUp);
}