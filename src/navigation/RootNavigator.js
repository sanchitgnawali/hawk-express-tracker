// All team members contributed to adding their files for reference.

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Landing from "../screens/Landing";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import DetailScreen from "../screens/DetailScreen";
import Profile from "../screens/Profile";
import DestinationSelection from "../screens/DestinationsScreen"
import HawkExpressTracker from "../screens/HomeScreen";
import { AuthContextProvider } from "../../context/AuthContext";

const Stack = createNativeStackNavigator();
const RootNavigator = () => {
  return (
    <AuthContextProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Landing" component={Landing} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Details" component={DetailScreen} />
          <Stack.Screen name="HomeScreen" component={HawkExpressTracker} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Destinations" component={DestinationSelection} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContextProvider>
  );
};

export default RootNavigator;





