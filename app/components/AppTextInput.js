import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import colors from '../config/colors';

function AppTextInput({width, ...otherProps}) {
    return (
        <View style={[styles.container, {width}]}>
           <TextInput placeholderTextColor={colors.medium} style={styles.inputText} {...otherProps} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        padding: 15,
        marginVertical: 10
    },
    inputText: {
        flex: 1,
        // color: colors.black
    }
})

export default AppTextInput;