import React from 'react';
import { TouchableWithoutFeedback, Text, View, ActivityIndicator, Alert } from 'react-native';
import styled from 'styled-components'
import { Button, Input, ButtonText } from '../shared';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import { Actions }  from 'react-native-router-flux';
import * as taskActions from '../../actions/task';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

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

class TaskDetail extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            description: props.item.description,
        }

        this.handleSave = this.handleSave.bind(this);
        this.renderButtonChildren = this.renderButtonChildren.bind(this);
    }

    handleSave() {        

        if(!this.state.description)
            Alert.alert("Descrição é obrigatória");
        else {
            this.props.item.description = this.state.description;
            this.props.taskActions.updateTask(this.props.item);
        }
    }

    componentWillUpdate(nextProps) {
        if(this.props.task.isFetching && !nextProps.isFetching) {
            if(nextProps.task.error) {
                Alert.alert(nextProps.task.error);
            }
            else {
                Actions.pop();
            }

            return false;
        }

        return true;
    }

    renderButtonChildren() {
        if(!this.props.task.isFetching)
            return <ButtonText>Salvar</ButtonText>;
        else
            return <ActivityIndicator size="small"/>
    }

    render() {
        return (
            <Container>
                <Header>
                    <FontAwesome style={{fontSize: 26, color: '#320b86'}}>{Icons.checkSquareO}</FontAwesome>
                    <HeaderTitle>Detalhes</HeaderTitle>
                </Header>
                <FormWrapper>                    
                    <Input 
                        placeholder={"Descrição"}
                        onChangeText={(description) => this.setState({description})}
                        value={this.state.description}
                        returnKeyType={'done'}
                    />
                    <Button 
                        onPress={this.handleSave}
                        disabled={this.props.task.isFetching}
                    >
                        {this.renderButtonChildren()}
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
        );
    }
}

export default connect(
    state => ({
        task: state.task
    }),
    dispatch => ({
        taskActions: bindActionCreators(taskActions, dispatch)
    })
)(TaskDetail);