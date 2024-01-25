import React, {useState} from 'react';
import styled from 'styled-components';
import {MaterialIcons} from '@expo/vector-icons';


const Container = styled.View`
    padding: 20px;
`;

const InputContainer = styled.View`
    flex-direction: row;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 10px;
`;

const Input = styled.TextInput`
    flex: 1;
    padding: 0 10px;
`;

const SearchBar = ({onSearch}) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (text) => {
        setSearchTerm(text);
        onSearch(text);
    };

    return (
        <Container>
            <InputContainer>
                <MaterialIcons name="search" size={20} color="#333"/>
                <Input
                    placeholder="Search"
                    value={searchTerm}
                    onChangeText={handleSearch}
                />
            </InputContainer>
        </Container>
    );
};

export default SearchBar;