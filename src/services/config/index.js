import { AsyncStorage } from 'react-native';

let USER = {
    token: '',
    credentials: {},
    setCredentials: (credentials) => {
        AsyncStorage.setItem('credentials', JSON.stringify(credentials))
    },
    getCredentials: () => {

        return AsyncStorage.getItem('credentials')
        .then(data => {
            this.credentials = JSON.parse(data);
        })
        .catch(error => console.log(error));
    },
    setToken: (token) => {
        AsyncStorage.setItem('token', token);
    },
    getToken: () => {
        return AsyncStorage.getItem('token')
        .then(data => {
            this.token = data;
        })
        .catch(error => console.log(error));
    }
}

const API_URL = "https://todo-api-vice.herokuapp.com"

export { USER, API_URL };