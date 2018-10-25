import { AsyncStorage } from 'react-native';

let USER = {
    token: '',
    credentials: {},
    storeCredentials: (credentials) => {
        AsyncStorage.setItem('credentials', JSON.stringify(credentials))
    },
    getStoredCredentials: () => {

        return AsyncStorage.getItem('credentials')
        .then(data => JSON.parse(data))
        .catch(error => console.log(error));
    },
    storeToken: (access_token) => {
        AsyncStorage.setItem('token', access_token);
    },
    getStoredToken: () => {
        return AsyncStorage.getItem('token')
        .then(data => {
            this.token = data;
        })
        .catch(error => console.log(error));
    }
}

const API_URL = "https://todo-api-vice.herokuapp.com"

export { USER, API_URL };