import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
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
import RegisterScreen from './app/screens/RegisterScreen'
import UserScreen from './app/screens/UserScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import ListItem from './app/components/ListItem';
import SearchBar from './app/components/SearchBar';
import SearchScreen from './app/screens/SearchScreen';
import ProfileHeader from './app/components/ProfileHeader';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import ProfileScreen from './app/screens/ProfileScreen';


const users = [
  {id: '0gb0nnee', location: 'Ottawa, ON'},
  {id: 't0bechi', location: 'Ottawa, ON'},
  {id: 'joyceokakoso', location: 'Port Harcourt, Nigeria'},
  {id: 'christabel_og', location: 'Toronto, ON'},
  {id: 'ebube_nw', location: 'Hamilton, ON'},
]
 
export default function App() {
  return (
    // <WelcomeScreen />
    // <MessagesScreen />
    // <UserScreen />
    // <RegisterScreen/>
    // <LogInScreen/>
    // <HomeScreen/>
    // <SearchScreen/>
    <ProfileScreen/>
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
    alignItems: 'center'
  },
  test: {
    flex: 1,
    backgroundColor: colors.black
  },
  profileContainer: {
    flexDirection: 'row'
  }
});
