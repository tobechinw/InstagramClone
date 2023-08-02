import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import colors from '../config/colors';

function PostIcon({ style, username, location }) {
    return (
        <View style={styles.container}>
           <Image source={require('../assets/pfp.jpg')} style={[styles.image, style]} />
           <View style={styles.textContainer}>
                <Text style={styles.title}>{username}</Text>
                <Text style={styles.subtitle}>{location}</Text>
           </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5
    },
    image: {
        height: 30,
        width: 30,
        borderRadius: 15,
        marginRight: 10,
    },
    textContainer: {
        flexDirection: 'column'
    },
    title: {
        fontSize: 15,
        color: colors.white
    },
    subtitle: {
        fontSize: 12.5,
        color: colors.white
    }
})

export default PostIcon;