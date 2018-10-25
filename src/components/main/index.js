import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { Colors } from '../shared';
import FontAwesome, { Icons } from 'react-native-fontawesome';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appActions from '../../actions/app';

import TaskList from '../task-list';

const Container = styled.View`
    flex:1;
`;

const Header = styled.View`
    height: 70;
    backgroundColor: ${Colors.PURPLE};
    alignItems: center;
    justifyContent: space-between;
    flexDirection: row;
    paddingLeft: 32;
    paddingRight: 10;
`

const Text = styled.Text`
    color: white;
    fontSize: 26;
    fontWeight: bold;
    flex: 1;
    textAlign: center;
`;

class Main extends React.Component {

    constructor() {
        super();

        this.handleSignOut = this.handleSignOut.bind(this);
    }

    handleSignOut() {
        this.props.appActions.signOut();
    }

    render() {
        return (
            <Container>
                <Header>
                    <Text>Tasks</Text>
                    <TouchableOpacity onPress={this.handleSignOut}>
                        <FontAwesome style={{color: 'white', fontSize: 22}}>{Icons.signOut}</FontAwesome>
                    </TouchableOpacity>
                </Header>
                <View style={{flex:1}}>
                    <TaskList/>
                </View>
            </Container>
        )
    }
}

export default connect(
    state => ({}),
    dispatch => ({
        appActions: bindActionCreators(appActions, dispatch)
    })
)(Main);