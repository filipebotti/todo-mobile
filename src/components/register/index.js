import React from 'react';
import { TouchableWithoutFeedback, Text, View, ActivityIndicator } from 'react-native';
import styled from 'styled-components'
import { Button, Input, ButtonText } from '../shared';
import { Actions } from 'react-native-router-flux';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as registerActions from '../../actions/register';

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
            password: '',
            username: ''
        }

        this.handleRegister = this.handleRegister.bind(this);
        this.renderRegisterButtonChildren = this.renderRegisterButtonChildren.bind(this);
    }

    handleRegister() {
        this.props.registerActions.signUp({
            username: this.state.username,
            name: this.state.name,
            password: this.state.password
        });
    }

    renderRegisterButtonChildren() {
        console.log(this.props.user);
        if(!this.props.user.isRegistering)
            return <ButtonText>Entrar</ButtonText>;
        else
            return <ActivityIndicator size="small"/>
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
                        onChangeText={(name) => this.setState({name})}
                        value={this.state.name}
                    />
                    <Input 
                        placeholder={"Senha"}
                        onChangeText={(password) => this.setState({password})}
                        value={this.state.password}
                    />
                    <Button text={"Registrar"}
                        onPress={this.handleRegister}
                        disabled={this.props.user.isRegistering}
                    >
                        {this.renderRegisterButtonChildren()}                    
                    </Button>
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

export default connect(
    state => ({
        user: state.user
    }),
    dispatch => ({
        registerActions: bindActionCreators(registerActions, dispatch)
    })
)(Register);