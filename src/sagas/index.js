import  { fork } from 'redux-saga/effects';
import authSagas from './auth';
import taskSagas from './tasks';

export default function* rootSaga() {
    yield [
        fork(authSagas),
        fork(taskSagas)
    ];
};