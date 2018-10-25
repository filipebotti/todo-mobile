import { USER, API_URL } from '../config';
import * as authCalls from './auth';
import * as taskCalls from './tasks';
import * as registerCalls from './register';

export function getConfig(method = 'GET', body) {
    
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
    ...registerCalls,
    getConfig,
    USER,
    API_URL
}