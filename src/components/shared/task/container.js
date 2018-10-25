import React from 'react';
import styled from 'styled-components';
import { Animated } from 'react-native';

const TaskContainer = styled.View`
    height: 55;
    backgroundColor: white;
    borderRadius: 3;
    alignItems: center;
    justifyContent: center;
    flexDirection: row;
    paddingHorizontal: 20px;
    marginBottom: 10;
`;

export default ({opacity = 1, children}) => {
    return (
        <Animated.View style={{opacity: opacity}}>
            <TaskContainer>
                {children}
            </TaskContainer>
        </Animated.View>
    )
};

