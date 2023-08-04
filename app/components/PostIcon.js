import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons'

function PostIcon({ style, username, location }) {
    return (
        <View style={styles.container}>
           <Image source={require('../assets/pfp.jpg')} style={[styles.image, style]} />
           <View style={styles.textContainer}>
                <Text style={styles.title}>{username}</Text>
                { location && <Text style={styles.subtitle}>{location}</Text> }
           </View>
           <TouchableOpacity style={styles.dotContainer}>
                <MaterialCommunityIcons name='dots-horizontal' size={25} color={colors.white} />
           </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
    },
    dotContainer: {
        marginLeft: 'auto'
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