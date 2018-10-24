import React from 'react';
import styled from 'styled-components';
import { Dimensions } from 'react-native';
import { Colors } from './colors';

const { width } = Dimensions.get('window');

const ButtonContainer = styled.TouchableOpacity`
    height: 40;
    backgroundColor: ${Colors.PURPLE};
    width: ${width - 90};
    alignItems: center;
    justifyContent: center;
    borderRadius: 3;
    marginTop: 20;
    marginBottom: 40;
`;

const ButtonText = styled.Text`
    fontSize: 15;
    color: ${Colors.LIGHT_PURPLE};
`;

const Button = ({text, onPress, disabled, children}) => {
    return (
        <ButtonContainer 
            onPress={onPress}
            disabled={disabled}
        >
            {text && <ButtonText>{text}</ButtonText>}
            {!text && children}
        </ButtonContainer>
    )
}

export { Button, ButtonText }