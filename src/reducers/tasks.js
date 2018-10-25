import * as types from '../actions';

const initialState = {
    tasks: [],
    isFetching: false,
    error: ''
}

export default function(state = initialState, action) {
    switch(action.type) {
        case types.TASKS_FETCH:
            return { ...state, isFetching: true };
        case types.TASKS_FETCH_SUCCESS:
            return { tasks: action.tasks, isFetching: false, error: '' };
        case types.TASKS_FETCH_FAIL:
            return { tasks: [], isFetching: false, error: action.error };
        case types.TASK_ADD:
            newTasks = [ ...state.tasks, action.task ];
            return { ...state, tasks: newTasks }
        case types.TASK_ADD_SUCCESS:
            tasks = state.tasks.filter(item => item.uuid != action.task.uuid);
            tasks = [ ...tasks, action.task ];
            return { ...state, tasks }
        case types.TASK_REMOVE:
            tasks = state.tasks.filter(item => item.uuid != action.task.uuid)
            return { ...state, tasks }
        case types.TASK_UPDATE:
            return {...state, isFetching: true, error: ''}
        case types.TASK_UPDATE_SUCCESS:            
            return { ...state, isFetching: false }
        case types.TASK_UPDATE_FAIL:
            return { ...state, isFetching: false, error: action.error }
        default:
            return state;
    }
}