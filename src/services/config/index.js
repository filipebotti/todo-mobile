import { AsyncStorage } from 'react-native';

let USER = {
    token: '',
    storeCredentials: (credentials) => {
        AsyncStorage.setItem('credentials', JSON.stringify(credentials))
    },
    getStoredCredentials: () => {

        return AsyncStorage.getItem('credentials')
        .then(data => JSON.parse(data))
        .catch(error => console.log(error));
    },
    clear: () => {
        AsyncStorage.removeItem('credentials');
    }
}

const API_URL = "https://todo-api-vice.herokuapp.com"

export { USER, API_URL };