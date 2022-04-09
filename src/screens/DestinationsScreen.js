import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Button,
} from "react-native";
import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
// import { auth } from "../../firebase";
// import { useLogout } from "../../hooks/useLogout";
import { styleSheet } from "../styles/accountStyle";

export default DestinationSelection = ({ navigation }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Christ's Church", value: "christChurch" },
    { label: "Bay Area Park & Ride", value: "parkRide" },
    { label: "Coastal Flow Measurement Co", value: "coastalFlow" },
    { label: "Anytime Fitness", value: "anytimeFit" },
    { label: "University Forest Apartments", value: "forestApt" },
    { label: "Delta Front", value: "deltaFront" },
    { label: "Arbor", value: "arbor" },
    { label: "Police Building", value: "five_O" },
    { label: "Recreation Center", value: "rec_Center" },
    { label: "Hunter Hall", value: "huntHall" },
    { label: "SSCB Entrance", value: "sscbEnt" },
    { label: "Bayou Student Entrance", value: "bayouBuild" },
  ]);

  return (
    <View style={styleSheet.container}>
      <Image
        source={require("../images/hawkExpressLogo.png")}
        style={styleSheet.image}
      />

      <View style={styleSheet.titleContainer}>
        <Text style={styleSheet.titleStyle}>Hawk Express Tracker</Text>
        <Text style={styleSheet.subtitleLabel}>
          Please Select Your Destination
        </Text>
      </View>

      <View style={styleSheet.buttonContainer}>
        <View style={{width:"80%"}}>
          <DropDownPicker
            placeholder="Select a Shuttle Stop"
            placeholderStyle={{
              color: "grey",
              fontWeight: "bold",
            }}
            dropDownDirection="BOTTOM"
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            onChangeValue={(value) => {
              console.log(value);
            }}
          />
        </View>
      </View>
      <TouchableOpacity 
          style={[styleSheet.button,styleSheet.marginTest]}
          onPress={() => navigation.navigate("HomeScreen")}
        >
                <Text style={styleSheet.buttonText}>Return to Map</Text>
      </TouchableOpacity> 
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
  },
  button: {
    backgroundColor: "#0782F9",
    width: "25%",
    padding: 10,
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  marginTest: {
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    alignItems: "center",
    fontWeight: "700",
    fontSize: 16,
  },
});
