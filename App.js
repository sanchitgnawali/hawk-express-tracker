import "react-native-gesture-handler";
import React from "react";
import { AuthContextProvider } from "./context/AuthContext";

import RootNavigator from "./src/navigation/RootNavigator";

const App = () => {
  return <RootNavigator />;
};

export default App;
