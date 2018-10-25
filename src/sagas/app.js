import { takeLatest } from 'redux-saga/effects';
import { Actions } from 'react-native-router-flux';
import { USER } from '../services/config';
import * as types from '../actions';

function* signOut() {

    USER.clear();
    Actions.reset("login")
}

export default function* () {
    yield takeLatest(types.SIGN_OUT, signOut);
}