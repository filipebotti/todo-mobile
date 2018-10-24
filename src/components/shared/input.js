import React from 'react';
import styled from 'styled-components';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const StyledInput = styled.TextInput`
    height:50;
    width:${width- 90};
    marginBottom: 20;
    borderBottomWidth: 1;
    borderBottomColor: #673AB7;
    color: #424242;
`;

const Input = ({value, onChangeText, placeholder, style }) => {
    return (
        <StyledInput 
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            style={style}
        />
    )
};

export { Input };