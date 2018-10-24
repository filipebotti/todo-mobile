import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.TextInput`
    height:50;
    width:250;
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