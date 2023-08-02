import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons'

function AppHeader(props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Text style={styles.headerText}>Instagram</Text>
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
    headerText: {
        fontSize: 30,
        color: colors.white,
    },
    icon: {
        marginLeft: 15
    },
    iconContainer: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-end'
    }
})
export default AppHeader;