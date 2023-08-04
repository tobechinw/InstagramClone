import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons'

function AppHeader() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={{ paddingLeft: 10 }}>
                <MaterialCommunityIcons name='instagram' size={35} color={colors.white} />
            </TouchableOpacity>
           <View style={styles.iconContainer}>
                <TouchableOpacity>
                    <MaterialCommunityIcons name='notification-clear-all' size={30} color='white' />
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialCommunityIcons style={styles.icon} name='facebook-messenger' size={30} color='white' />
                </TouchableOpacity>
           </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginBottom: 20,
    },
    icon: {
        marginLeft: 15
    },
    iconContainer: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-end',
        paddingRight: 10
    }
})

export default AppHeader;