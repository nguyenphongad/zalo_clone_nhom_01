
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";


const Stack = createStackNavigator();

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


//pages

import SplashScreenComponent from './src/components/ScreenComponent/SplashScreenComponent';
import MainView from './src/components/MainView';
import ChatsPage from './src/pages/ChatsPage';
import ContactsPage from './src/pages/ContactsPage';
import TimeLinePage from './src/pages/TimeLinePage';
import MePage from './src/pages/MePage';
import SearchPage from './src/pages/SearchPages/SearchPage';
import LoginPage from './src/pages/AuthPages/LoginPage';
import ContainerAuthPages from './src/pages/AuthPages/ContainerAuthPages';
import RegisterPage from './src/pages/AuthPages/RegisterPage';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';


import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons/faCircleChevronLeft'



export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator
        initalRouteName="splashScreen"
        screenOptions={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 18 }}
            >
              <FontAwesomeIcon
                icon={faCircleChevronLeft}
                size={26}
                style={{ color: "#ffffff" }}
              />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: '#ff6666',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: '500',
          },
          headerTitleAlign: 'center',
        })}
      >
        <Stack.Screen name="splashScreen"
          component={SplashScreenComponent}
          options={{ headerShown: false }} />

        <Stack.Screen name="Chats"
          component={MainView}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Contacts"
          component={ContactsPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="TimeLine"
          component={TimeLinePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Me"
          component={MePage}
          options={{ headerShown: false }}
        />

        <Stack.Screen name="SearchPage"
          component={SearchPage}
          options={{ headerShown: false }}
        />

        <Stack.Screen name="ContainerAuthPage"
          component={ContainerAuthPages}
          options={{ headerShown: false }}
        />

        <Stack.Screen name="Đăng nhập"
          component={LoginPage}
        />
        <Stack.Screen name="Đăng ký"
          component={RegisterPage}
        />





      </Stack.Navigator>


      {/* 
      <View style={styles.container}>
        <Text>Phong</Text>
        
      </View> */}
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
});
