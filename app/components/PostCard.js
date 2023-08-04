import React from 'react';
import { Image, StyleSheet, View, Dimensions } from 'react-native';
import PostIcon from './PostIcon';

function PostCard({ username, location }) {
    return (
        <View style={styles.container}>
           <PostIcon username={username} location={location} />
           <Image source={require('../assets/pfp.jpg')} style={styles.image}  />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 20,
        marginTop: 10
    },
    icon: {
        width: '100%',
    },
    image: {
        width: '100%',
        height: Dimensions.get('window').height / 2
    }
})
export default PostCard;