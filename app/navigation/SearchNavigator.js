import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchScreen from '../screens/SearchScreen';
import PostScreen from '../screens/PostScreen';


const Stack = createNativeStackNavigator()

const SearchNavigator = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name='SearchScreen' component={SearchScreen} />
        <Stack.Screen name='PostScreen' component={PostScreen} />
    </Stack.Navigator>
)

export default SearchNavigator