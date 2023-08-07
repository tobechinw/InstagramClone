import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserScreen from '../screens/UserScreen';
import MessagesScreen from '../screens/MessagesScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

const FeedNavigator = () => (
	<Stack.Navigator screenOptions={{ headerShown: false }}>
		<Stack.Screen name="HomeScreen" component={HomeScreen} />
		<Stack.Screen name="UserScreen" component={UserScreen} />
		<Stack.Screen name="MessagesScreen" component={MessagesScreen} />
	</Stack.Navigator>
);

export default FeedNavigator;
