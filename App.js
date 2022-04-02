import * as React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './Screens/SignUp';
import Login from './Screens/Login';
import Home from './Screens/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='LoginPage'>
        <Stack.Screen name='SignUpPage' component={SignUp} />
        <Stack.Screen name='LoginPage' component={Login} />
        <Stack.Screen name='HomePage' component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

