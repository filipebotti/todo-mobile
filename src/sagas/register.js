import * as types from '../actions';
import { takeLatest, put } from 'redux-saga/effects';
import API from '../services/api';

function* signUp(action) {
    try {
        const data = yield API.signUp(action.payload);
        
        if(!data.access_token) {
            if(data.name) 
                throw "Nome não pode ficar em branco" 
            if(data.username) 
                throw "Usuário não pode ficar em branco" 
            if(data.password) 
                throw "Senha não pode ficar em branco" 
        }
            

        API.USER.token = data.access_token;
        const { username, password } = action.payload;
        API.USER.storeCredentials({ username, password });

        yield put({ type: types.SIGN_UP_SUCCESS });
    } catch(error) {
        yield put({ type: types.SIGN_UP_FAIL, error });
    }
}

export default function* () {
    yield takeLatest(types.SIGN_UP, signUp);
}