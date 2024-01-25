import React from 'react';
import {FlatList, Text, View} from 'react-native';
import styled from 'styled-components/native';
import AdviceCard from './AdviceCard';

const FlatListContainer = styled.View`
    width: 100%;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`;

const AdviceList = ({advices, onOrderPress}) => {
    return (
        <FlatListContainer>
            <FlatList
            numColumns={2}
            data={advices}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <AdviceCard advice={item}/>}
            ListEmptyComponent={() => (
                <View style={{
                    padding: 20,
                    alignItems: 'center',
                    flexWrap: "row"
                }}>
                    <Text>No advice available</Text>
                </View>
            )}
        />
        </FlatListContainer>

    );
};
export default AdviceList;