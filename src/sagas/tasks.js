import { takeEvery, put } from 'redux-saga/effects';
import * as types from '../actions';
import API from '../services/api';
import { Actions } from 'react-native-router-flux';

function* fetchTasks() {
    try {
        const tasks = yield API.fetchTasks();
        yield put({ type: types.TASKS_FETCH_SUCCESS, tasks })
    } catch(ex) {
        yield put({type: types.TASKS_FETCH_FAIL, error: ex });
    }
}

function* fetchTasksAuth() {
    try {
        yield fetchTasks();
        Actions.main();
    } catch (exc) {
        yield put({ type: types.AUTH_FAIL, error: ex });
    }
}

function* addTask(action) {
    try {
        const data = yield API.addTask(action.task);
        
        const { id, description } = data.task;
        const uuid = data.uuid;

        yield put({ type: types.TASK_ADD_SUCCESS, task: { id, description, uuid }});
    } catch(ex) {
        yield put({ type: types.TASK_ADD_FAIL, error: ex });
    }
}

function* removeTask(action) {
    try {
        yield API.removeTask(action.task);
        yield put({ type: types.TASK_REMOVE_SUCCESS, task: actionm.task });
    } catch (exc) {
        yield put ({ type: types.TASK_REMOVE_FAIL, error: exc });
    }
}

export default function* () {
    yield takeEvery(types.AUTH_SUCCESS, fetchTasksAuth);
    yield takeEvery(types.TASKS_FETCH, fetchTasks);
    yield takeEvery(types.TASK_ADD, addTask);
    yield takeEvery(types.TASK_REMOVE, removeTask);
}