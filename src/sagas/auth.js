import { takeLatest, put } from 'redux-saga/effects';
import * as types from '../actions';
import API from '../services/api';

function* doAuth(action) {
  try{
    const data = yield API.auth(action.payload);
    
    API.USER.storeToken(data.access_token);
    API.USER.token = data.access_token;
    API.USER.storeCredentials(action.payload);

    yield put({ type: types.AUTH_SUCCESS, user: data.user });
  }
  catch(error) {
    yield put({ type: types.AUTH_FAIL, error });
  }    
}

export default function* authSagas() {
  yield takeLatest(types.AUTH, doAuth);
}
