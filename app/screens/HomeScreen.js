import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, FlatList, RefreshControl, ScrollView } from 'react-native';
import AppHeader from '../components/AppHeader';
import ProfileIcon from '../components/ProfileIcon';
import ListItemSeparator from '../components/ListItemSeparator';
import PostCard from '../components/PostCard';
import colors from '../config/colors';
import Screen from '../components/Screen';


const initialUsers = [
    {id: '0gb0nnee', location: 'Ottawa, ON', image: require('../assets/pfp.jpg')},
    {id: 't0bechi', location: 'Ottawa, ON', image: require('../assets/pfp.jpg')},
    {id: 'joyceokakoso', location: 'Port Harcourt, Nigeria', image: require('../assets/pfp.jpg')},
    {id: 'christabel_og', location: 'Toronto, ON', image: require('../assets/pfp.jpg')},
    {id: 'ebube_nw', location: 'Hamilton, ON', image: require('../assets/pfp.jpg')},
]



function HomeScreen(props) {

    const [refreshing, setRefreshing] = useState(false)
    const [users, setUsers] = useState(initialUsers)

    const onRefresh = () => {
      setUsers([
          {id: '0gb0nnee', location: 'Ottawa, ON'},
          {id: 't0bechi', location: 'Ottawa, ON'},
          {id: 'joyceokakoso', location: 'Port Harcourt, Nigeria'},
          {id: 'ebube_nw', location: 'Hamilton, ON'},
      ])
    }

    return (
        <Screen style={{ padding: 10 }}>
          <AppHeader/>
          <View>
            <FlatList
                style={{ flexDirection: 'row' }}
                horizontal
                data={users} 
                keyExtractor={user => user.id.toString()}
                renderItem={() => 
                  <ProfileIcon/>
                } 
            />
          </View>
          <ScrollView horizontal style={styles.profileContainer}>
          </ScrollView>
          <FlatList 
              data={users} 
              keyExtractor={user => user.id.toString()} 
              ItemSeparatorComponent={ListItemSeparator} 
              refreshing={refreshing} 
              renderItem={({ item }) => 
                <PostCard username={item.id} location={item.location}/>} 
              refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    tintColor={colors.white} // Change this color to the desired color
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