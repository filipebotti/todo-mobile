import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import Login from './components/login';
import Register from './components/register';


export default class App extends React.Component {
  render() {
    return (
      <Router sceneStyle={{backgroundColor: '#efefef'}}>
        <Stack hideNavBar={true}>
          <Scene key="login" component={Login} initial={true}/> 
          <Scene key="register" component={Register} />  
        </Stack>
      </Router>
    );
  }
}