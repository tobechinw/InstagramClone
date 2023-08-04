import React from 'react';
import { StyleSheet, View } from 'react-native';
import Screen from '../components/Screen';
import UserScreen from './UserScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors';

function ProfileScreen({username}) {
    return (
        <UserScreen>
            <MaterialCommunityIcons style={styles.container} name='instagram' size={30} color={colors.white} />
        </UserScreen>
    );
}

const styles = StyleSheet.create({
    container: {}
})

export default ProfileScreen;