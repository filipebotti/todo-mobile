import { API_URL, getConfig } from './index';

export async function fetchTasks() {

    const response = await fetch(
        `${API_URL}/tasks`,
        getConfig()
    );

    return response.json();
}

export async function addTask(task) {

    const response = await fetch(
        `${API_URL}/tasks`,
        getConfig('POST', task)
    );

    return response.json();
}

export async function removeTask(task) {
    
    const response = await fetch(
        `${API_URL}/tasks/${task.id}`,
        getConfig('DELETE')
    )

    return response;
}