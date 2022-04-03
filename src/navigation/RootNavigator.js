import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Login from '../screens/Login';
import Signup from '../screens/Signup';
import DetailScreen from '../screens/DetailScreen';
import Profile from '../screens/Profile';
import HawkExpressTracker from '../screens/HomeScreen'

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Details" component={DetailScreen} />
        <Stack.Screen name="HomeScreen" component={HawkExpressTracker} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;