import { StatusBar } from 'expo-status-bar';
import {
	Button,
	FlatList,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ProfileIcon from './app/components/ProfileIcon';
import PostIcon from './app/components/PostIcon';
import PostCard from './app/components/PostCard';
import colors from './app/config/colors';
import ListItemSeparator from './app/components/ListItemSeparator';
import AppHeader from './app/components/AppHeader';
import HomeScreen from './app/screens/HomeScreen';
import LogInScreen from './app/screens/LogInScreen';
import Screen from './app/components/Screen';
import AppTextInput from './app/components/AppTextInput';
import AppFormField from './app/components/forms/AppFormField';
import AppForm from './app/components/forms/AppForm';
import RegisterScreen from './app/screens/RegisterScreen';
import UserScreen from './app/screens/UserScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import ListItem from './app/components/ListItem';
import SearchBar from './app/components/SearchBar';
import SearchScreen from './app/screens/SearchScreen';
import ProfileHeader from './app/components/ProfileHeader';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ProfileScreen from './app/screens/ProfileScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppText from './app/components/AppText';
import AppButton from './app/components/AppButton';
import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';

const users = [
	{ id: '0gb0nnee', location: 'Ottawa, ON' },
	{ id: 't0bechi', location: 'Ottawa, ON' },
	{ id: 'joyceokakoso', location: 'Port Harcourt, Nigeria' },
	{ id: 'christabel_og', location: 'Toronto, ON' },
	{ id: 'ebube_nw', location: 'Hamilton, ON' },
];

const Tweets = ({ navigation, route }) => {
	return (
		<Screen style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<AppText>Tweet {route.params.id} </AppText>
			<AppButton
				title={'Tweet Detail'}
				onPress={() => navigation.navigate('TweetDetails', { tweetNumber: 1 })}
			/>
		</Screen>
	);
};

const TweetDetails = ({ navigation, route }) => (
	<Screen style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
		<AppText>Tweet Details </AppText>
		<AppButton
			title={'Back'}
			onPress={() => navigation.navigate('Tweets', { id: 50 })}
		/>
	</Screen>
);

const Stack = createNativeStackNavigator();
const StackNavigator = () => (
	<Stack.Navigator
		screenOptions={{
			headerStyle: {
				backgroundColor: colors.medium,
			},
			headerShown: false,
			headerTintColor: colors.black,
		}}
	>
		<Stack.Screen
			initialParams={{ id: 30 }}
			name="Tweets"
			component={Tweets}
			options={{ title: 'Home Page' }}
		/>
		<Stack.Screen
			name="TweetDetails"
			component={TweetDetails}
			options={({ navigation }) => ({
				headerTitle: () => <Button title={'Testing'} />,
				headerRight: () => <Button title="Right" />,
				headerLeft: () => (
					<Button title="Left" onPress={() => navigation.goBack()} />
				),
			})}
		/>
	</Stack.Navigator>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
	<Tab.Navigator
		screenOptions={{
			tabBarActiveBackgroundColor: 'tomato',
			tabBarActiveTintColor: 'white',
			tabBarInactiveBackgroundColor: '#eee',
			tabBarInactiveTintColor: 'black',
		}}
	>
		<Tab.Screen
			name="Home"
			component={StackNavigator}
			initialParams={{ id: 50 }}
			options={{
				tabBarIcon: ({ size, color }) => (
					<MaterialCommunityIcons name="home" size={size} color={color} />
				),
			}}
		/>
		<Tab.Screen
			name="Account"
			component={StackNavigator}
			initialParams={{ id: 50 }}
		/>
	</Tab.Navigator>
);

export default function App() {
	return (
		<NavigationContainer theme={navigationTheme}>
			<AppNavigator />
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	icon: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	test: {
		flex: 1,
		backgroundColor: colors.black,
	},
	profileContainer: {
		flexDirection: 'row',
	},
});
