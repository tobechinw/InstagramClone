import React from 'react';
import { Text, SafeAreaView, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import WelcomeText from '../components/WelcomeText';
import AppButton from '../components/AppButton';
import Screen from '../components/Screen';

function WelcomeScreen(props) {
    return (
        <Screen style={styles.container}>
           <MaterialCommunityIcons color='white' name='instagram' size={100} />
           <WelcomeText name={"Instagram"} style={styles.text} />
            <AppButton style={styles.login} title={"Login"} onPress={() => console.log('Login button tapped')} />
            <AppButton style={styles.signup} title={"Sign Up"} onPress={() => console.log('Sign Up button tapped')} />   
        </Screen>
    );
}
const styles = StyleSheet.create({
    container: {
        padding: 10,
        width: '100%',
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontWeight: 'bold', 
        fontSize: 30,
        fontFamily: 'Avenir'
    }
})
export default WelcomeScreen;