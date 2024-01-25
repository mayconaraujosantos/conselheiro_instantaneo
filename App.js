import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { ToastAndroid, Text, View, Button } from 'react-native';
import AppHeader from './src/components/AppHeader';
import AdviceList from './src/components/AdviceList';
import SearchBar from './src/components/SearchBar';
import CreateButton from './src/components/CreateButton';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
`;

const showToast = (message) => {
  ToastAndroid.showWithGravityAndOffset(
    message,
    ToastAndroid.LONG,
    ToastAndroid.BOTTOM,
    25,
    50
  );
};
export default function App() {

  const [advices, setAdvices] = useState([]);
  const [searchedAdvices, setSearchedAdvices] = useState([]);
  const [createButtonPressed, setCreateButtonPressed] = useState(false);
  const [isFetchingAdvice, setIsFetchingAdvice] = useState(false);


  useEffect(() => {
    if (createButtonPressed && !isFetchingAdvice) {
      setCreateButtonPressed(false);
      fetchAdvice();
    }
  }, [createButtonPressed, isFetchingAdvice]);

  const fetchAdvice = async () => {
    try {
      setIsFetchingAdvice(true);

      const timestamp = Date.now();
      const apiUrl = `https://api.adviceslip.com/advice?timestamp=${timestamp}`;

      const response = await fetch(apiUrl, {
        headers: {
          'Cache-Control': 'no-cache'
        }
      });

      const data = await response.json();

      const newAdvice = data.slip && {
        id: `${data.slip.id}`,
        text: data.slip.advice,
      };

      const existingAdvice = advices.find((advice) => advice.text === newAdvice.text);

      if (!existingAdvice) {
        console.log('LOG newAdvice:', newAdvice);
        setAdvices((prevAdvices) => [...prevAdvices, newAdvice]);
      } else {
        console.log(`Deu certo!:  ${newAdvice.text}`);
        showToast('A dica já existe na lista!');
      }
    } catch (error) {
      console.error('LOG Erro ao obter a dica:', error);
    } finally {
      setIsFetchingAdvice(false);
    }
  }

  const handleAddAdvice = () => {
    setCreateButtonPressed(true);
  };

  const handleOrderPress = () => {
    console.log('mudando a ordem');
    setAdvices((prevAdvices) => [...prevAdvices].reverse());
  };

  const handleSearch = (searchTerm) => {
    const filteredAdvices = advices.filter((advice) =>
      advice.text.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchedAdvices(filteredAdvices);
  };

  return (
    <SafeAreaProvider>
      <Container>
        <AppHeader title="Dicas App" onOrderPress={handleOrderPress}/>
        <SearchBar onSearch={handleSearch} />
        <AdviceList advices={searchedAdvices.length > 0 ? searchedAdvices : advices} onOrderPress={handleOrderPress} />
        <CreateButton onPress={handleAddAdvice} />
      </Container>
    </SafeAreaProvider>
  );
}