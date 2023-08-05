import React, { useState } from 'react';
import { FlatList, StyleSheet, RefreshControl } from 'react-native';
import Screen from '../components/Screen';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItem from '../components/ListItem';
import AppHeader from '../components/AppHeader';
import colors from '../config/colors';

const initialMessages = [
    {
        id: 1,
        username: '0gb0nnee',
        message: 'Hi!', 
        image: require('../assets/pfp.jpg')
    },
    {
        id: 2,
        username: 't0bechi',
        message: '3 new messages', 
        image: require('../assets/model1.jpeg')
    },
    {
        id: 3,
        username: 'Nawa men',
        message: '9 new messages', 
        image: require('../assets/model2.jpeg')
    },
    {
        id: 4,
        username: 'Sasha',
        message: 'Sent Monday', 
        image: require('../assets/model3.jpeg')
    },
    {
        id: 5,
        username: 'Samuel Akuma',
        message: 'Sent Monday', 
        image: require('../assets/model4.jpeg')
    },
    {
        id: 6,
        username: '942',
        message: 'Seen Sunday', 
        image: require('../assets/model5.jpeg')
    },
    {
        id: 7,
        username: 'Christabelle',
        message: 'Yeah bro', 
        image: require('../assets/model6.jpeg')
    },
    {
        id: 8,
        username: 'MGE',
        message: 'Seen last week', 
        image: require('../assets/model7.jpeg')
    },
    {
        id: 9,
        username: 'Chinedu',
        message: 'Mad', 
        image: require('../assets/model8.jpeg')
    },
    {
        id: 10,
        username: 'LOLA <33',
        message: 'Seen', 
        image: require('../assets/model9.jpeg')
    },
    {
        id: 11,
        username: 'Chibuzo',
        message: 'cause your joke wasn\'t funny', 
        image: require('../assets/model10.jpeg')
    },
    {
        id: 12,
        username: 'olise_og',
        message: 'Seen', 
        image: require('../assets/model11.jpeg')
    },
    {
        id: 13,
        username: 'dubemudobi',
        message: 'Keeps', 
        image: require('../assets/model12.jpeg')
    },
    {
        id: 14,
        username: 'Chek',
        message: '2 new messages', 
        image: require('../assets/model13.jpeg')
    },
    
]

function MessagesScreen(props) {

    const [messages, setMessages] = useState(initialMessages)
    const [refreshing, setRefreshing] = useState(false)

    const onRefresh = () => {
        console.log('Refreshed')
    }

    return (
        <Screen>
            <AppHeader />
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}   
                renderItem={({ item }) =>
                    <ListItem 
                        image={ item.image }
                        onPress={() => console.log(`item with id ${item.id} clicked`)}
                        title={ item.username }
                        subtitle={ item.message }
                        rightImage={'camera'}
                    />
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

export default MessagesScreen;