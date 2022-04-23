import { useEffect, useState } from "react";
import { auth } from "../../firebase";
import MapComponent from "../components/MapComponent";
import { View, StyleSheet } from "react-native";
import { FAB, Portal, Provider } from "react-native-paper";
import { useLogout } from "../../hooks/useLogout";

export default HawkExpressTracker = ({ navigation }) => {
  const [state, setState] = useState({ open: false });
  const onStateChange = ({ open }) => setState({ open });
  const { open } = state;
  const { logout } = useLogout();

  const handleSignout = () => {
    logout();
    // auth.signOut().catch((error) => alert(error.message));
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        navigation.replace("Login");
      }
    });

    return unsubscribe;
  }, []);

  return (
    <Provider>
      <View style={styles.buttonContainer}>
        <Portal>
          <MapComponent />
          <FAB.Group
            open={open}
            fabStyle={styles.fabGroup}
            color="#0078AE"
            icon={open ? "bus" : "plus"}
            actions={[
              {
                icon: "account",
                label: "Profile",
                color: "#0078AE",
                labelTextColor: "#0078AE",
                onPress: () => navigation.navigate("Profile"),
                small: false,
              },
              // {
              //   icon: 'book',
              //   label: 'Routes',
              //   color: "#0078AE",
              //   labelTextColor: "#0078AE",
              //   onPress: () => navigation.navigate("Profile"),
              //   small: false,
              // },
              {
                icon: "school",
                label: "Destinations",
                color: "#0078AE",
                labelTextColor: "#0078AE",
                onPress: () => navigation.navigate("Destinations"),
                small: false,
              },
              {
                icon: "door",
                label: "Sign Out",
                color: "#0078AE",
                labelTextColor: "#0078AE",
                onPress: handleSignout,
                small: false,
              },
            ]}
            onStateChange={onStateChange}
            onPress={() => {
              open;
            }}
          />

          {/* <FAB
        style={styles.fab}
        small
        color="#0078AE"
        backgroundColor="white"
        icon={(props) => <MaterialCommunityIcons name="account" {...props}/>}
        onPress={() => navigation.navigate("Profile")}
      />

      <FAB
        style={styles.fab2}
        small
        icon={(props) => <MaterialCommunityIcons name="train-car" {...props}/>}
        color="#0078AE"
        onPress={() => navigation.navigate("Destinations")}
      /> */}
        </Portal>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    position: "relative",
  },
  fabGroup: {
    backgroundColor: "white",
  },
  fab2: {
    position: "absolute",
    margin: 16,
    bottom: 28,
    zIndex: 10,
    right: 30,
  },
});
