import React from 'react';
import { Formik } from 'formik';
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';

function AppForm({ initialValues, onSubmit, validationSchema, children }) {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView  behavior='padding'>
                <Formik
                        initialValues={initialValues}
                        onSubmit={onSubmit}
                        validationSchema={validationSchema}
                >{ () => (
                        <>
                            {children}
                        </>
                )}
                </Formik>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
}

export default AppForm;