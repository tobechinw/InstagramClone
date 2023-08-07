import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../config/colors';

function ProfileStats({ title, subtitle, onPress }) {
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={onPress} style={styles.innerContainer}>
				<Text style={styles.title}>{title}</Text>
				{subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		flex: 1,
	},
	innerContainer: {
		alignItems: 'center',
	},
	title: {
		color: colors.white,
		textAlign: 'center',
		fontSize: 20,
	},
	subtitle: {
		color: colors.white,
		fontSize: 16,
	},
});

export default ProfileStats;
