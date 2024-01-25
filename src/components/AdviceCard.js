import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';

const getRandomColor = () => {
    // Função para gerar uma cor aleatória em formato hexadecimal
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const CardsContainer = styled.ScrollView`
    flex-direction: row; // Exibe os cards lado a lado
`;

const CardContainer = styled.View`
    border: 1px solid #333;
    margin: 10px;
    padding: 10px;
    width: 180px;
    height: 150px;
    border-radius: 10px;
    background-color: ${(props) => props.backgroundColor || '#fff'};
`;

const CardTitle = styled.Text`
    font-size: ${(props) => props.isId ? '18px' : '14px'};
    font-weight: ${(props) => props.isId ? 'bold' : 'normal'};
    color: #fff;
`;

const AdviceCard = ({advice}) => {
    const [backgroundColor, setBackgroundColor] = useState(getRandomColor());
    useEffect(() => {
        // Mantém a cor de fundo constante após a renderização inicial
        setBackgroundColor(getRandomColor());
    }, []); // Apenas executa no montagem do componente

    return (
        <CardContainer backgroundColor={backgroundColor}>
            <CardTitle isId>{advice.id}</CardTitle>
            <CardTitle>{advice.text}</CardTitle>
        </CardContainer>
    );
};

export default AdviceCard;