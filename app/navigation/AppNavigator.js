import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import ProfileScreen from '../screens/ProfileScreen';
import colors from '../config/colors';
import FeedNavigator from './FeedNavigator';
import SearchNavigator from './SearchNavigator';
import CreatePostScreen from '../screens/CreatePostScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
	<Tab.Navigator
		screenOptions={{
			tabBarStyle: {
				backgroundColor: colors.black,
				borderTopColor: colors.medium,
			},
			headerShown: false,
			tabBarShowLabel: false,
		}}
	>
		<Tab.Screen
			options={{
				tabBarIcon: ({ focused }) =>
					focused ? (
						<MaterialCommunityIcons
							name="home"
							size={30}
							color={colors.white}
						/>
					) : (
						<MaterialCommunityIcons
							name="home-outline"
							size={30}
							color={colors.white}
						/>
					),
			}}
			name="Feed"
			component={FeedNavigator}
		/>
		<Tab.Screen
			options={{
				tabBarIcon: ({}) => (
					<MaterialCommunityIcons
						name="magnify"
						size={30}
						color={colors.white}
					/>
				),
			}}
			name="Search"
			component={SearchNavigator}
		/>
		<Tab.Screen
			options={{
				tabBarIcon: ({ focused }) =>
					focused ? (
						<MaterialCommunityIcons
							name="plus-box"
							size={30}
							color={colors.white}
						/>
					) : (
						<MaterialCommunityIcons
							name="plus-box-outline"
							size={30}
							color={colors.white}
						/>
					),
			}}
			name="Post"
			component={CreatePostScreen}
		/>
		<Tab.Screen
			options={{
				tabBarIcon: ({ focused }) =>
					focused ? (
						<MaterialCommunityIcons
							name="account"
							size={30}
							color={colors.white}
						/>
					) : (
						<MaterialCommunityIcons
							name="account-outline"
							size={30}
							color={colors.white}
						/>
					),
			}}
			name="Account"
			component={ProfileScreen}
		/>
	</Tab.Navigator>
);

export default AppNavigator;
