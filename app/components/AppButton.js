import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function AppButton({title, onPress, style}) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={[styles.title, style]}>{title}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#405DE6',
        width: "50%",
        borderRadius: 10,
        marginTop: 10, 
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: "95%",
        marginVertical: 10,
    },
    title: {
        color: 'white',
        width: '90%',
        borderRadius: 15,
        fontSize: 20,
        textAlign: 'center',
    }
})
export default AppButton;