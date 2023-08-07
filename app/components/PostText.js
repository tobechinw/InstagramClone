import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppText from './AppText';

function PostText({ username, caption, style }) {
	return (
		<View style={[styles.container, style]}>
			<AppText style={styles.username}>{username}</AppText>
			<AppText style={styles.caption}>{caption}</AppText>
		</View>
	);
}

const styles = StyleSheet.create({
	caption: {
		marginLeft: 10,
	},
	container: {
		marginTop: 10,
		flexDirection: 'row',
	},
	username: {
		fontFamily: 'System',
		fontSize: 16,
		marginRight: 10,
	},
	caption: {
		fontFamily: 'System',
		fontSize: 16,
	},
});

export default PostText;
