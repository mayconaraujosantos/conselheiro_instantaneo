import React from 'react';
import styled from 'styled-components';
import {TouchableOpacity} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

const ButtonContainer = styled.View`
    position: absolute;
    bottom: 20px;
    right: 20px;
`;
const ButtonText = styled.Text`
    font-size: 16px;
    text-align: center;
`;
const CreateButton = ({onPress, title}) => {
    return (
        <ButtonContainer>
            <TouchableOpacity onPress={onPress}>
                <ButtonText>{title}</ButtonText>
                <MaterialIcons name="add-circle" size={50} color="blue"/>
            </TouchableOpacity>
        </ButtonContainer>
    );
};

export default CreateButton;