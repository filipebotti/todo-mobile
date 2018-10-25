import  { fork } from 'redux-saga/effects';
import authSagas from './auth';
import taskSagas from './tasks';
import appSagas from './app';

export default function* rootSaga() {
    yield [
        fork(authSagas),
        fork(taskSagas),
        fork(appSagas)
    ];
};