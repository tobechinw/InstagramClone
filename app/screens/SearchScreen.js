import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, RefreshControl } from 'react-native';
import Screen from '../components/Screen';
import SearchBar from '../components/SearchBar';
import colors from '../config/colors';
import SearchImage from '../components/SearchImage';


const images = [
    {id: 1, image: require('../assets/model1.jpeg')},
    {id: 2, image: require('../assets/model2.jpeg')},
    {id: 3, image: require('../assets/model7.jpeg')},
    {id: 4, image: require('../assets/model1.jpeg')},
    {id: 5, image: require('../assets/model7.jpeg')},
    {id: 6, image: require('../assets/model2.jpeg')},
    {id: 7, image: require('../assets/model7.jpeg')},
    {id: 8, image: require('../assets/model3.jpeg')},
    {id: 9, image: require('../assets/model7.jpeg')},
    {id: 10, image: require('../assets/model2.jpeg')},
    {id: 11, image: require('../assets/model1.jpeg')},
    {id: 12, image: require('../assets/model1.jpeg')},
    {id: 13, image: require('../assets/model2.jpeg')},
    {id: 14, image: require('../assets/model7.jpeg')},
    {id: 15, image: require('../assets/model1.jpeg')},
    {id: 16, image: require('../assets/model7.jpeg')},
    {id: 17, image: require('../assets/model2.jpeg')},
    {id: 18, image: require('../assets/model7.jpeg')},
    {id: 19, image: require('../assets/model3.jpeg')},
    {id: 20, image: require('../assets/model7.jpeg')},
    {id: 21, image: require('../assets/model2.jpeg')},
    {id: 22, image: require('../assets/model1.jpeg')},
    {id: 23, image: require('../assets/model1.jpeg')},
    {id: 24, image: require('../assets/model1.jpeg')},
    {id: 25, image: require('../assets/model2.jpeg')},
    {id: 26, image: require('../assets/model7.jpeg')},
    {id: 27, image: require('../assets/model1.jpeg')},
    {id: 28, image: require('../assets/model7.jpeg')},
    {id: 29, image: require('../assets/model2.jpeg')},
    {id: 30, image: require('../assets/model7.jpeg')},
    {id: 31, image: require('../assets/model3.jpeg')},
    {id: 32, image: require('../assets/model7.jpeg')},
    {id: 33, image: require('../assets/model2.jpeg')},
    {id: 34, image: require('../assets/model4.jpeg')},
    {id: 35, image: require('../assets/model5.jpeg')},
    {id: 36, image: require('../assets/model6.jpeg')},
    {id: 37, image: require('../assets/model7.jpeg')},
    {id: 38, image: require('../assets/model8.jpeg')},
    {id: 39, image: require('../assets/model9.jpeg')},
    {id: 40, image: require('../assets/model10.jpeg')},
    {id: 41, image: require('../assets/model11.jpeg')},
    {id: 42, image: require('../assets/model12.jpeg')},
    {id: 43, image: require('../assets/model13.jpeg')},
]

function SearchScreen(props) {

    const [refreshing, setRefreshing] = useState(false)

    const onRefresh = () => {
        console.log('Refreshed')
    }

    return (
        <Screen>
            <SearchBar />
            <FlatList 
                data={images}
                keyExtractor={image => image.id.toString()}
                numColumns={3}
                renderItem={({ item }) => 
                    <SearchImage source={ item.image }/>
                }
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        tintColor={colors.white} 
                    />
                }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 130,
        height: 130
    }
})

export default SearchScreen;