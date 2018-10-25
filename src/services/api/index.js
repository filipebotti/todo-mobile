import { USER, API_URL } from '../config';
import * as authCalls from './auth';
import * as taskCalls from './tasks';

export function getConfig(method = 'GET', body) {
    console.log(USER.token);
    return {
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Authorization': USER.token || ''
        },
        method,
        body: JSON.stringify(body),
        mode:'cors'
    }
}
export { USER, API_URL }

export default {
    ...authCalls,
    ...taskCalls,
    getConfig,
    USER,
    API_URL
}