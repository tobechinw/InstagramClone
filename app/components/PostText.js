import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppText from './AppText';

function PostText({username, caption, style}) {
    return (
        <View style={[styles.container, style]}>
           <AppText style={styles.username}>{username}</AppText>
           <AppText style={styles.caption}>{caption}</AppText>
        </View>
    );
}

const styles = StyleSheet.create({
    caption: {
        marginLeft: 10
    },
    container: {
        marginTop: 5,
        flexDirection: 'row'
    }
})

export default PostText;