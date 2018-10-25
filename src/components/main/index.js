import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import { Colors } from '../shared';

import TaskList from '../task-list';

const Container = styled.View`
    flex:1;
`;

const Header = styled.View`
    height: 70;
    backgroundColor: ${Colors.PURPLE};
    alignItems: center;
    justifyContent: center;
`

const Text = styled.Text`
    color: white;
    fontSize: 26;
    fontWeight: bold;
`;

class Main extends React.Component {

    render() {
        return (
            <Container>
                <Header>
                    <Text>Tasks</Text>
                </Header>
                <View style={{flex:1}}>
                    <TaskList/>
                </View>
            </Container>
        )
    }
}

export default Main;