import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors';
import AppText from './AppText';

function ProfileHeader({ username }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.icon}>
                <MaterialCommunityIcons name='chevron-left' size={35} color={colors.white} />
            </TouchableOpacity>
           <View style={styles.centerContainer}>
                <AppText style={styles.text}>{username}</AppText>
           </View>
           {/* <Text style={{ color: colors.white}}>{username}</Text> */}
           <TouchableOpacity style={styles.icon}>
                <MaterialCommunityIcons name='dots-horizontal' style={styles.burger} size={35} color={colors.white} />
           </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    burger: {
        width: '33%',
        flexDirection: 'row',
        justifyContent: "flex-end",
        marginLeft: 90
    },
    centerContainer: {
        // flex: 1,
        width: '33%',
        alignItems: 'center',
        fontWeight: 'bold'
    },
    container: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
    },
    icon: {
        width: '33%'
    },
    text: {
        color: colors.white,
        fontSize: 20,
        width: '33%',
    }
})

export default ProfileHeader;