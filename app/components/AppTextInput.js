import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import colors from '../config/colors';
import defaultStyles from '../config/styles'
import { MaterialCommunityIcons } from '@expo/vector-icons'


function AppTextInput({icon, width, ...otherProps}) {
    return (
        <View style={[styles.container, {width}]}>
           {icon && <MaterialCommunityIcons name={icon} size={20} color={colors.medium} style={styles.icon} /> }
           <TextInput placeholderTextColor={colors.medium} style={[defaultStyles.text, styles.inputText]} {...otherProps} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black,
        borderRadius: 10,
        borderColor: colors.medium,
        borderWidth: 0.5,
        padding: 15,
        flexDirection: 'row',
        marginVertical: 10
    },
    icon: {
        marginRight: 10
    },
    inputText: {
        flex: 1,
    }
})

export default AppTextInput;







































// import React from 'react';
// import { TextInput, View, StyleSheet, Platform, TouchableOpacity } from 'react-native';
// import { MaterialCommunityIcons } from '@expo/vector-icons'
// import colors from '../config/colors';

// function AppTextInput({icon, width,  ...otherProps}) {
//     return (
//         <View style={[styles.container, { width }]}>
//             {icon && <MaterialCommunityIcons name={icon} size={20} color={colors.medium} style={styles.icon}  />}
//             <TextInput placeholderTextColor={colors.medium} style={styles.inputText} {...otherProps} />
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: colors.light,
//         borderRadius: 25,
//         flexDirection: 'row',
//         padding: 15,
//         marginVertical: 10,
//     },
//     icon: {
//         marginRight: 10
//     },
//     inputText: {
//         flex: 1
//     }
// })

// export default AppTextInput;