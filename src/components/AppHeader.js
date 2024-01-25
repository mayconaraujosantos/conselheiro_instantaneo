import React from 'react';
import styled from 'styled-components/native';
import {Text, View} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'; // Importe o ícone desejado


const Header = styled.View`
    background-color: #333;
    color: white;
    padding: 10px;
    text-align: center;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;
const Avatar = styled.Image`
    width: 30px;
    height: 30px;
    border-radius: 15px;
`;

const TitleText = styled.Text`
    color: white;
`;

const OrderButton = styled.TouchableOpacity`
    padding: 5px;
`;

const OrderButtonText = styled.Text`
    color: white;
`;
const AppHeader = ({title, onOrderPress}) => {
    return (
        <Header>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Avatar source={require('./../../assets/avatar.jpg')}/>
                <Text style={{color: '#fff', marginLeft: 10}}>{title}</Text>
            </View>
            <OrderButton onPress={onOrderPress}>
                <OrderButtonText>
                    <MaterialIcons name="filter-list" size={24} color="white"/>
                </OrderButtonText>
            </OrderButton>
        </Header>
    );
};

export default AppHeader;