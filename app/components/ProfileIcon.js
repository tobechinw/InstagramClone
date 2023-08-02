import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

function ProfileIcon({ style }) {
    return (
        <View style={styles.container}>
           <Image source={require('../assets/pfp.jpg')} style={[styles.image, style]} />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        marginBottom: 20
    },
    image: {
        height: 70,
        width: 70,
        borderRadius: 50,
        marginRight: 10
    }
})
export default ProfileIcon;