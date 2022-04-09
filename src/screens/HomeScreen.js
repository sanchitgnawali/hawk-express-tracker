import { useEffect } from "react";
import { auth } from "../../firebase";
import MapComponent from "../components/MapComponent";
import { View, StyleSheet } from "react-native";
import HomeControl from "../components/HomeControl";
import { FAB } from "react-native-elements";

export default HawkExpressTracker = ({ navigation }) => {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        navigation.replace("Login");
      }
    });

    return unsubscribe;
  }, []);

  return (
    <View style={styles.home}>
      <FAB
        style={styles.fab}
        small
        icon="menu"
        color="skyblue"
        onPress={() => navigation.navigate("Profile")}
      />

      <FAB
        style={styles.fab2}
        small
        icon="menu"
        color="#0078AE"
        onPress={() => navigation.navigate("Destinations")}
      />
      <MapComponent />
      <HomeControl />
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    position: "relative",
  },
  fab: {
    position: "absolute",
    margin: 16,
    top: 30,
    zIndex: 10,
    right: 0,
  },
  fab2: {
    position: "absolute",
    margin: 16,
    bottom: 20,
    zIndex: 10,
    right: 15,
  },
});
