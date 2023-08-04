import React, { useState } from 'react';
import { Image, StyleSheet, View, Dimensions, Vibration, TouchableOpacity } from 'react-native';
import PostIcon from './PostIcon';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors';
import PostText from './PostText';

function PostCard({ caption, location, source, username,  }) {

    const [ liked, setLiked ] = useState(false)
    const [ saved, setSaved ] = useState(false)

    return (
        <View style={styles.container}>
           <PostIcon source={source} username={username} location={location} />
           <Image source={source} style={styles.image}  />
           <View style={styles.postActions}>
                <TouchableOpacity>
                    { !liked && <MaterialCommunityIcons onPress={() => setLiked(!liked)} style={{ marginLeft: 10, marginRight: 15 }} name='heart-outline' color={colors.white} size={30} /> }
                    { liked && <MaterialCommunityIcons onPress={() => setLiked(!liked)} style={{ marginLeft: 10, marginRight: 15 }} name='heart' color={'red'} size={30} /> }
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialCommunityIcons style={{ marginRight: 15 }} name='thought-bubble-outline' color={colors.white} size={30} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.sendContainer}>
                    <MaterialCommunityIcons name='send-outline' color={colors.white} size={25} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.bookmarkIcon}>
                    { !saved && <MaterialCommunityIcons onPress={() => setSaved(!saved)} name='bookmark-outline' color={colors.white} size={30} /> }
                    { saved && <MaterialCommunityIcons onPress={() => setSaved(!saved)} name='bookmark' color={colors.white} size={30} /> }
                </TouchableOpacity>
           </View>
           <PostText username={username} caption={caption} />
        </View>
    );
}

const styles = StyleSheet.create({
    bookmarkIcon:{
        marginLeft: 'auto'
    },
    container: {
        flex: 1,
        marginBottom: 20,
        marginTop: 10
    },
    image: {
        width: '100%',
        height: Dimensions.get('window').height / 1.6
    },
    postActions: {
        flexDirection: 'row',
        marginTop: 10
    },
    sendContainer: {
        transform: [{ rotate: '-45deg' }],
        marginLeft: 5
    }
})

export default PostCard;