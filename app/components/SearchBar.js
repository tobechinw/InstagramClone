import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../config/colors';
import AppTextInput from './AppTextInput';

function SearchBar(props) {
    return (
        <AppTextInput icon={'magnify'} placeholder='Search' style={styles.searchBar} />
    );
}

const styles = StyleSheet.create({
    searchBar: {
        width: '100%',
        color: colors.white,
        fontSize: 15
    }
})

export default SearchBar;