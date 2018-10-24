/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import Login from './components/login'


export default class App extends React.Component {
  render() {
    return (
      <Router sceneStyle={{backgroundColor: '#efefef'}}>
        <Stack hideNavBar={true}>
          <Scene key="login" component={Login} initial={true}/>        
        </Stack>
      </Router>
    );
  }
}