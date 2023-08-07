import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LogInScreen from '../screens/LogInScreen';
import RegisterScreen from '../screens/RegisterScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import colors from '../config/colors';

const Stack = createNativeStackNavigator();
const AuthNavigator = () => (
	<Stack.Navigator>
		<Stack.Screen
			name="Welcome"
			component={WelcomeScreen}
			options={{ headerShown: false }}
		/>
		<Stack.Screen
			name="Login"
			component={LogInScreen}
			options={{
				headerTitleStyle: { color: colors.white },
				headerStyle: { backgroundColor: colors.black },
			}}
		/>
		<Stack.Screen
			name="Sign up"
			component={RegisterScreen}
			options={{
				headerTitleStyle: { color: colors.white },
				headerStyle: { backgroundColor: colors.black },
			}}
		/>
	</Stack.Navigator>
);

export default AuthNavigator;
