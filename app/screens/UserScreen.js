import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import Screen from '../components/Screen';
import ProfileHeader from '../components/ProfileHeader';
import ListItemSeparator from '../components/ListItemSeparator';
import ProfileStats from '../components/ProfileStats';

const sampleMetaData = {
    username: 'bars',
    pfp: require('../assets/pfp.jpg'),
    numPosts: 20,
    numFollowers: 200,
    numFollowing: 150,
    bio: "Adanna <3",
    website: 'https://tobechinw.github.io'
}

function UserScreen({metadata, children}) {
    return (
        <Screen>
            { children }
            <ListItemSeparator/>
            <View style={styles.profileInfo}>
                <TouchableOpacity onPress={() => console.log('image opened')}>
                    <Image style={styles.profileImage} source={require('../assets/pfp.jpg')}/>
                </TouchableOpacity>
                <View style={styles.titlesContainer}>
                    <ProfileStats onPress={() => console.log('Post clicked')} title={0} subtitle="Posts"/>
                    <ProfileStats onPress={() => console.log('Followers clicked')} title={1263} subtitle="Followers"/>
                    <ProfileStats onPress={() => console.log('Following clicked')} title={1129} subtitle="Following"/>
                </View>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {},
    profileInfo: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        paddingTop: 15
    },
    profileImage: {
        height: 100,
        width: 100,
        borderRadius: 50
    },
    titlesContainer: {
        marginLeft: 50,
        flexDirection: 'row',
        flex: 1,
    },
    titleText: {
        fontSize: 16,
        marginBottom: 5,
    }
})

export default UserScreen;
