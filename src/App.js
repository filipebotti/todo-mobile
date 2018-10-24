import React from 'react';
import { StatusBar, View } from 'react-native';


import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

import sagas from './sagas';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import { Router, Stack, Scene } from 'react-native-router-flux';
import Login from './components/login';
import Register from './components/register';
import Main from './components/main';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducers,
  applyMiddleware(logger, sagaMiddleware)
);

sagaMiddleware.run(sagas);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store} >
        <View style={{flex:1}}>
          <StatusBar hidden={true}/>
          <Router sceneStyle={{backgroundColor: '#efefef'}}>        
            <Stack hideNavBar={true}>
              <Scene key="login" component={Login} initial={true}/> 
              <Scene key="register" component={Register} />
              <Scene key="main" component={Main} />
            </Stack>
          </Router>
        </View>
      </Provider>
    );
  }
}