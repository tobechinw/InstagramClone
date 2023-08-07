import React from 'react';
import { StyleSheet } from 'react-native';
import colors from '../config/colors';
import AppTextInput from './AppTextInput';

function SearchBar() {
	return (
		<AppTextInput
			icon={'magnify'}
			placeholder="Search"
			style={styles.searchBar}
		/>
	);
}

const styles = StyleSheet.create({
	searchBar: {
		width: '100%',
		color: colors.white,
		fontSize: 15,
	},
});

export default SearchBar;
