import React from 'react';
import { TouchableWithoutFeedback, Text, View } from 'react-native';
import styled from 'styled-components'
import { Button, Input } from '../shared';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import { Actions } from 'react-native-router-flux';

const Container = styled.View`
    flex: 1;
    alignItems: center;
    justifyContent: center;
`;

const FormWrapper = styled.View`
    height: 250;
    alignItems: center;
    justifyContent: center;
    flex: 1;
`;

const Header = styled.View`
    flexDirection: row;
    alignItems: flex-end;
    justifyContent: center;
    paddingBottom: 30;  
    flex: 0.6;
`;

const HeaderTitle = styled.Text`
    color: #320b86;
    fontSize: 26;
    fontWeight: bold;
`;

class Register extends React.Component {

    constructor() {
        super();

        this.state = {
            name: '',
            password: ''
        }
    }

    render() {
        return (
            <Container>
                <Header>                    
                    <HeaderTitle>Registre-se</HeaderTitle>
                </Header>
                <FormWrapper>
                    <Input 
                        placeholder={"Usuário"}
                        onChangeText={(username) => this.setState({username})}
                        value={this.state.username}
                    />
                    <Input 
                        placeholder={"Nome"}
                        onChangeText={(username) => this.setState({username})}
                        value={this.state.name}
                    />
                    <Input 
                        placeholder={"Senha"}
                        onChangeText={(password) => this.setState({password})}
                        value={this.state.password}
                    />
                    <Button text={"Registrar"}/>
                </FormWrapper>
                <View style={{flex:0.5}}>
                    <TouchableWithoutFeedback onPress={Actions.pop}>
                        <View>
                            <Text style={{color: '#424242'}}>Cancelar</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </Container>
        )
    }
}

export default Register;