import * as types from './index';

export function fetchTasks() {
    return {
        type: types.TASKS_FETCH
    }
}

export function addTask(task) {
    return {
        type: types.TASK_ADD,
        task
    }
}

export function removeTask(task) {
    return {
        type: types.TASK_REMOVE,
        task
    }
}

export function updateTask(task) {
    return {
        type: types.TASK_UPDATE,
        task
    }
}