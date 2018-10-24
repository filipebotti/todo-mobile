import * as authCalls from './auth';
import { USER, API_URL } from '../config';

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
    getConfig,
    USER,
    API_URL
}