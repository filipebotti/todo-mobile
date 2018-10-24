import { takeLatest, put, all } from 'redux-saga/effects';
import * as types from '../actions';
import API from '../services/api';

function* doAuth(action) {
  try{
    console.log("doAuth");
    const data = yield API.auth(action.payload);
    API.USER.setToken(data.access_token);
    API.USER.setCredentials(action.payload);

    yield put({ type: types.AUTH_SUCCESS, user: data.user });
  }
  catch(error) {
    yield put({ type: types.AUTH_FAIL, error });
  }    
}

export default function* authSagas() {
  yield takeLatest(types.AUTH, doAuth);
}
