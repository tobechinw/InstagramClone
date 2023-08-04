import React from 'react';
import { Image, StyleSheet, Dimensions, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import colors from '../config/colors';

function SearchImage({ source }) {
    return (
        <TouchableOpacity activeOpacity={0.7}>
            <Image source={source} style={styles.image} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {},
    image: {
        width: Dimensions.get('window').width / 3,
        height: Dimensions.get('window').width / 3,
        borderColor: colors.black,
        borderWidth: 0.3
    }
})

export default SearchImage;