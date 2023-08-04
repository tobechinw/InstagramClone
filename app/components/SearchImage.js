import React from 'react';
import { Image, StyleSheet, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import colors from '../config/colors';

function SearchImage({ style, source }) {
    return (
        <TouchableOpacity activeOpacity={0.7}>
            <Image source={source} style={styles.image} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {},
    image: {
        width: 130,
        height: 130,
        borderColor: colors.black,
        borderWidth: 0.3
    }
})

export default SearchImage;