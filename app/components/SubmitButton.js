import React from 'react';
import { StyleSheet } from 'react-native';
import AppButton from './AppButton';

function SubmitButton({ title }) {
	return <AppButton title={title} />;
}

const styles = StyleSheet.create({
	container: {},
});

export default SubmitButton;
