import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

function WelcomeText({ name, style }) {
	return (
		<View style={styles.container}>
			<Text style={style}>{name}</Text>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		marginBottom: 20,
	},
});
export default WelcomeText;
