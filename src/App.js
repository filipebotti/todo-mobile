import React from 'react';
import { StatusBar, View } from 'react-native';
import { Router, Stack, Scene } from 'react-native-router-flux';
import Login from './components/login';
import Register from './components/register';
import Main from './components/main';


export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        <StatusBar hidden={true}/>
        <Router sceneStyle={{backgroundColor: '#efefef'}}>        
          <Stack hideNavBar={true}>
            <Scene key="login" component={Login} /> 
            <Scene key="register" component={Register} />
            <Scene key="main" component={Main} initial={true}/>
          </Stack>
        </Router>
      </View>
    );
  }
}