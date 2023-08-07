import React from 'react';
import Screen from '../components/Screen';
import AppText from '../components/AppText';

function PostScreen(props) {
    return (
        <Screen style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
            <AppText>Post Screen</AppText>
        </Screen>
    );
}

export default PostScreen;