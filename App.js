// Core app files references to the navigator

import "react-native-gesture-handler";
import React from "react";
import { AuthContextProvider } from "./context/AuthContext";

import RootNavigator from "./src/navigation/RootNavigator";
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Async ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

const App = () => {
  return <RootNavigator />;
};

export default App;
