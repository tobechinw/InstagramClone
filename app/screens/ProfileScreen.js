import React from 'react';
import { StyleSheet, View } from 'react-native';
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
    container: {
        marginBottom: 10,
        marginLeft: 10
    }
})

export default ProfileScreen;