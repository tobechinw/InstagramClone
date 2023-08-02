import React from 'react';
import { ScrollView, StyleSheet, useColorScheme } from 'react-native';
import Screen from '../components/Screen';
import * as Yup from 'yup'

import { AppFormField, AppForm } from '../components/forms'
import colors from '../config/colors';
import AppHeader from '../components/AppHeader';
import SubmitButton from '../components/SubmitButton';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    username: Yup.string().required().min(5, "Username must be at least 5 characters long"),
    password: Yup.string().required().min(4).label("Password"),
})


function LogInScreen(props) {

    return (
        <Screen style={styles.container}>
            <AppHeader />
            <AppForm 
                initialValues={{ email: '', username: '', password: ''}}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField 
                    
                    autoCapitalize="none" 
                    autoCorrect={false} 
                    // icon="email" 
                    keyboardType="email-address" 
                    keyboardAppearance='dark' 
                    name={"email"}
                    placeholder="Email" 
                    style={styles.formField}
                    textContentType="emailAddress" 
                />
                <AppFormField 
                    
                    autoCapitalize="none" 
                    autoCorrect={false} 
                    //  icon="account" 
                    //  keyboardType="email-address" 
                    keyboardAppearance='dark' 
                    name={"username"}
                    placeholder="Username" 
                    style={styles.formField}
                    //  textContentType="emailAddress" 
                />
                <AppFormField 
                    autoCapitalize="none" 
                    autoCorrect={false} 
                    // icon="lock" 
                    keyboardAppearance='dark' 
                    name={"password"} 
                    placeholder="Password" 
                    secureTextEntry={true} 
                    style={styles.formField}
                />
                <SubmitButton style={styles.formField} title="Login" />
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: colors.black,
        justifyContent: 'center',
    },
    formField: {
        color: colors.white,
        width: '100%',
        textAlign: 'center'
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 50
    }
})

export default LogInScreen;