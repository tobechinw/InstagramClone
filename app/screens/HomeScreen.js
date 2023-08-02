import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, FlatList, RefreshControl } from 'react-native';
import AppHeader from '../components/AppHeader';
import ProfileIcon from '../components/ProfileIcon';
import ListItemSeparator from '../components/ListItemSeparator';
import PostCard from '../components/PostCard';
import colors from '../config/colors';


const initialUsers = [
    {id: '0gb0nnee', location: 'Ottawa, ON'},
    {id: 't0bechi', location: 'Ottawa, ON'},
    {id: 'joyceokakoso', location: 'Port Harcourt, Nigeria'},
    {id: 'christabel_og', location: 'Toronto, ON'},
    {id: 'ebube_nw', location: 'Hamilton, ON'},
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
        <SafeAreaView style={styles.test}>
      <AppHeader />
      <View style={styles.profileContainer}>
        <ProfileIcon/>
        <ProfileIcon/>
        <ProfileIcon/>
        <ProfileIcon/>
        <ProfileIcon/>
        <ProfileIcon/>
        <ProfileIcon/>
        <ProfileIcon/>
        <ProfileIcon/>
        <ProfileIcon/>
        <ProfileIcon/>
      </View>
      <FlatList data={users} keyExtractor={user => user.id.toString()} ItemSeparatorComponent={ListItemSeparator} refreshing={refreshing} renderItem={({ item }) => 
        <PostCard username={item.id} location={item.location}/>} 
        refreshControl={
            <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                tintColor={colors.white} // Change this color to the desired color
            />
        }
      />
    </SafeAreaView>
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
      flexDirection: 'row'
    }
});

export default HomeScreen;