import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../config/colors';

function AppButton({title, onPress, style}) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={[styles.title, style]}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.blue,
        width: "100%",
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        marginVertical: 10,
        marginTop: 20
    },
    title: {
        fontSize: 15,
        textAlign: 'center',
        color: colors.white,
    }
})

export default AppButton;