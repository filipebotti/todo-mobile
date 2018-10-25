import React from 'react';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import styled from 'styled-components';
import { Colors } from '../colors';
import TaskContainer from './container';

const TaskInput = styled.TextInput`
    flex: 1;
    fontSize: 18px;
    marginLeft: 10px;
    color: ${Colors.DARK_GREY}
`;

const NewTask = ({ value, onChangeText, onSubmitEditing, textRef }) => {
    return (
        <TaskContainer>
            <FontAwesome style={{fontSize: 24, color: Colors.DARK_GREY}}>{Icons.plus}</FontAwesome>
            <TaskInput 
                placeholder={"Nova Tarefa..."}
                value={value}
                onChangeText={onChangeText}
                onSubmitEditing={onSubmitEditing}
                ref={textRef}
                blurOnSubmit={false}
            />                    
        </TaskContainer>
    );
};

export default  NewTask;