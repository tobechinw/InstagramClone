// // import React from 'react';
// // import { StyleSheet, Text } from 'react-native';
// // import colors from '../config/colors';

// // function AppText({ children, style }) {
// //     return (
// //         <Text style={[styles.text, style]}>{children}</Text>
// //     );
// // }

// // const styles = StyleSheet.create({
// //     text: {
// //         fontFamily: 'Avenir',
// //         fontWeight: 'bold',
// //         color: colors.white
// //     }
// // })

// // export default AppText;

// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import colors from '../config/colors';

// function AppText({ title, subtitle, style }) {
//     return (
//         <View style={styles.container}>
//             <View>
//                 <Text style={[styles.title, style]}>{title}</Text>
//                 <Text style={[styles.subtitle, style]}>{subtitle}</Text>
//             </View>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flexDirection: 'row',
//         width: '100%',
//     },
//     title: {
//         fontFamily: 'Avenir',
//         fontWeight: 'bold',
//         color: colors.white,
//         width: "20%",
//         marginLeft: 22,
//         fontSize: 20
//     }
// })

// export default AppText;

import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../config/colors';

function ProfileStats({ title, subtitle, onPress }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress} style={styles.innerContainer}>
                <Text style={styles.title}>{title}</Text>
                {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    innerContainer: {
        alignItems: 'center'
    },
    title: {
        fontFamily: 'Avenir',
        fontWeight: 'bold',
        color: colors.white,
        textAlign: 'center',
        fontSize: 20,
    },
    subtitle: {
        fontFamily: 'Avenir',
        color: colors.white,
        fontSize: 16, // You can adjust the font size for the subtitle
    },
});

export default ProfileStats;
