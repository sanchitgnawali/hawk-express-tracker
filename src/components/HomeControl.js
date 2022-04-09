import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default HomeControl = () => {
  return (
    <View style={styles.homeControl}>
      <Text style={styles.text}>Ready To Go? Press Me!</Text>

      {/* <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Select Destination</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  homeControl: {
    height: "15%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  text: {
    fontSize: 20,
  },
  button: {
    marginLeft: 10,
    padding: 10,
    backgroundColor: "#0782F9",
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
