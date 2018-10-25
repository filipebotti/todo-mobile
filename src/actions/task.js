import * as types from './index';

export function fetchTasks() {
    return {
        type: types.TASKS_FETCH
    }
}

export function addTask(task) {
    console.log("actions add task");
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