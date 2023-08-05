import React from 'react';
import { Image, StyleSheet, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import AppText from './AppText';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons'

function ListItem({ onPress, title, subtitle, image, rightImage }) {
    return (
        <TouchableHighlight underlayColor={colors.medium} onPress={onPress}>
            <View style={styles.container}>
                { image && <Image style={styles.image} source={image} /> }
                <View style={styles.detailsContainer}>
                    <AppText numberOfLines={1} style={styles.title}>{title}</AppText>
                    { subtitle && <AppText numberOfLines={1} style={styles.subtitle}>{subtitle}</AppText> }
                </View>
                
                <TouchableOpacity style={styles.rightImage} onPress={() => console.log(`sending live photo to ${title}`)}>
                    { rightImage && <MaterialCommunityIcons name={rightImage} size={30} color={colors.white} /> }
                </TouchableOpacity>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center'
    },
    detailsContainer: {
        marginLeft: 10,
        justifyContent: 'center',
        flex: 1,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    rightImage: {
        paddingLeft: 15
    },
    subtitle: {
        fontSize: 15,
        fontFamily: 'System',
        color: colors.medium
    },
    title: {
        // fontWeight: '600',
        fontSize: 15,
        fontFamily: 'System'
    }
})

export default ListItem;