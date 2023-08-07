import React from 'react';
import Screen from '../components/Screen';
import AppText from '../components/AppText';

function CreatePostScreen(props) {
	return (
		<Screen style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<AppText>Create Post</AppText>
		</Screen>
	);
}

export default CreatePostScreen;
