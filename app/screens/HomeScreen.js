import React, { useState } from 'react';
import { StyleSheet, FlatList, RefreshControl } from 'react-native';
import AppHeader from '../components/AppHeader';
import ListItemSeparator from '../components/ListItemSeparator';
import PostCard from '../components/PostCard';
import colors from '../config/colors';
import Screen from '../components/Screen';
import StoryList from '../components/StoryList';


const initialUsers = [
    {id: '0gb0nnee', image: require('../assets/pfp.jpg'), caption: '❤️'},
    {id: 't0bechi', image: require('../assets/model1.jpeg'), caption: 'Hm'},
    {id: 'fdjhsdfh', location: 'Port Harcourt, Nigeria', image: require('../assets/model2.jpeg'), caption: 'iskj'},
    {id: 'chinedu_nw', location: 'Toronto, ON', image: require('../assets/model13.jpeg'), caption: 'yukef'},
    {id: 'ebube_nw', location: 'Hamilton, ON', image: require('../assets/model4.jpeg'), caption: 'tyudsjh'},
]



function HomeScreen() {

    const [refreshing, setRefreshing] = useState(false)
    const [users, setUsers] = useState(initialUsers)

    const onRefresh = () => {
      setUsers([
        {id: '0gb0nnee', image: require('../assets/pfp.jpg'), caption: 'Life is good'},
        {id: 't0bechi', image: require('../assets/model5.jpeg'), caption: 'Work'},
        {id: 'fdjhsdfh', location: 'Port Harcourt, Nigeria', image: require('../assets/model11.jpeg'), caption: 'The Fall Off'},
        {id: 'chinedu_nw', location: 'Toronto, ON', image: require('../assets/model13.jpeg'), caption: 'The Off-Season'},
        {id: 'ebube_nw', location: 'Hamilton, ON', image: require('../assets/model8.jpeg'), caption: 'Born Sinner'},
      ])
    }

    return (
        <Screen style={{ padding: 10 }}>
          <AppHeader/>
          <StoryList users={users} />
          <FlatList 
              data={users} 
              keyExtractor={user => user.id.toString()} 
              ItemSeparatorComponent={ListItemSeparator} 
              refreshing={refreshing} 
              renderItem={({ item }) =>
                <PostCard source={item.image} username={item.id} location={item.location} caption={item.caption}/>
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
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    test: {
      flex: 1,
      backgroundColor: colors.black
    },
    profileContainer: {
      flexDirection: 'row',
    }
});

export default HomeScreen;