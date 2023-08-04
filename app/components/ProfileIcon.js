import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

function ProfileIcon({ source, style }) {
    return (
        <TouchableOpacity style={styles.container}>
           <Image source={source} style={[styles.image, style]} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        flexDirection: 'row'
    },
    image: {
        height: 70,
        width: 70,
        borderRadius: 35,
        marginRight: 10
    }
})

export default ProfileIcon;