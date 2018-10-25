import { API_URL, getConfig } from './index';

export async function signUp(payload) {

    const response = await fetch(
        `${API_URL}/users`,
        getConfig('POST', payload)
    );

    return response.json();
}