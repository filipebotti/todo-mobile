import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.TouchableOpacity`
    height: 40;
    backgroundColor: #673AB7;
    width: 250;
    alignItems: center;
    justifyContent: center;
    borderRadius: 3;
    marginTop: 20;
    marginBottom: 40;
`;

const ButtonText = styled.Text`
    fontSize: 15;
    color: #EDE7F6;
`;

const Button = ({text}) => {
    return (
        <ButtonContainer>
            <ButtonText>{text}</ButtonText>
        </ButtonContainer>
    )
}

export { Button }