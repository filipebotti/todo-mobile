import { takeLatest, put } from 'redux-saga/effects';
import * as types from '../actions';
import API from '../services/api';

function* doAuth(action) {
  try{
    const data = yield API.auth(action.payload);
    
    if(data.error)
      throw data;

    API.USER.token = data.access_token;
    API.USER.storeCredentials(action.payload);

    yield put({ type: types.INITIAL_FETCH, user: data.user });
  }
  catch(error) {
    yield put({ type: types.AUTH_FAIL, error });
  }    
}

export default function* authSagas() {
  yield takeLatest(types.AUTH, doAuth);
}
