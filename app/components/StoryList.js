import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import ProfileIcon from './ProfileIcon';

function StoryList( { users }) {
    return (
        <View>
            <FlatList
                horizontal
                data={users} 
                keyExtractor={user => user.id.toString()}
                renderItem={( {item} ) => 
                  <ProfileIcon source={item.image}/>
                } 
            />  
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        width: '100%'
    }
})
export default StoryList;