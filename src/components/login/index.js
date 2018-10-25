import React from 'react';
import { TouchableWithoutFeedback, Text, View, ActivityIndicator } from 'react-native';
import styled from 'styled-components'
import { Button, Input, ButtonText } from '../shared';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import { Actions }  from 'react-native-router-flux';
import * as authActions from '../../actions/auth';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { USER } from '../../services/config';

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

class Login extends React.Component {

    constructor() {
        super();

        this.state = {
            username: '',
            password: '',
            loading: true
        }

        this.handleLogin = this.handleLogin.bind(this);
        this.renderLoginButtonChildren = this.renderLoginButtonChildren.bind(this);
    }

    componentDidMount() {
        credentials = USER.getStoredCredentials()
        .then(credentials => {
            
            if (credentials) {
                this.props.authActions.auth(credentials);
                
            } else 
                this.setState({ loading: false });
        })
        .catch(() => this.setState({ loading: false }));
    }

    handleLogin() {        
        this.props.authActions.auth(this.state);
    }

    renderLoginButtonChildren() {
        if(!this.props.auth.isAuthenticating)
            return <ButtonText>Entrar</ButtonText>;
        else
            return <ActivityIndicator size="small"/>
    }

    render() {

        if(this.state.loading)
            return (
                <Container>
                    <ActivityIndicator size="large"/>
                </Container>
            );
        else
            return (
                <Container>
                    <Header>
                        <FontAwesome style={{fontSize: 26, color: '#320b86'}}>{Icons.checkSquareO}</FontAwesome>
                        <HeaderTitle>Tasker</HeaderTitle>
                    </Header>
                    <FormWrapper>
                        <Input 
                            placeholder={"Usuário"}
                            onChangeText={(username) => this.setState({username})}
                            value={this.state.username}
                        />
                        <Input 
                            placeholder={"Senha"}
                            onChangeText={(password) => this.setState({password})}
                            value={this.state.password}
                        />
                        <Button 
                            onPress={this.handleLogin}
                            disabled={this.props.auth.isAuthenticating}
                        >
                            {this.renderLoginButtonChildren()}
                        </Button>
                    </FormWrapper>
                    <View style={{flex:0.5}}>
                        <TouchableWithoutFeedback onPress={Actions.register}>
                            <View>
                                <Text style={{color: '#424242'}}>Cadastre-se</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </Container>
            );
    }
}

export default connect(
    state => ({
        auth: state.auth
    }),
    dispatch => ({
        authActions: bindActionCreators(authActions, dispatch)
    })
)(Login);