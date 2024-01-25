import React, {useEffect, useState} from 'react';
import {Modal} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
    flex: 1;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 30px;
`;

const ToastContainer = styled.View`
    background-color: #333;
    padding: 10px;
    border-radius: 8px;
`;

const ToastText = styled.Text`
    color: white;
    font-size: 16px;
`;

const CustomToast = ({message, existsAdviceText, visible, onRequestClose}) => {
    return (
        <Modal
            visible={visible}
            transparent
            animationType="slide"
            onRequestClose={onRequestClose}
        >
            <Container>
                <ToastContainer>
                    <ToastText>{existsAdviceText || message}</ToastText>
                </ToastContainer>
            </Container>
        </Modal>
    );
};

// Uso
const showToast = (message) => {
    const [toastVisible, setToastVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setToastVisible(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <CustomToast
            message={message}
            visible={toastVisible}
            onRequestClose={() => setToastVisible(false)}
        />
    );
};

export default showToast;