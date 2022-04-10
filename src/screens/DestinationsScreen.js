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
        source={require("../images/hawk-logo.png")}
        style={styles.image}
      />

      <View style={styleSheet.titleContainer}>
        <Text style={styleSheet.titleStyle}>Hawk Express Tracker</Text>
        <Text style={styleSheet.subtitleLabel}>
          Select Your Destination
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
          style={styles.button}
          onPress={() => navigation.navigate("HomeScreen")}
        >
              <Text style={styleSheet.buttonText}>Return to Map</Text>
      </TouchableOpacity> 

    </View>
    
  );
};

const styles = StyleSheet.create({
  image: {
    height: 330,
    width: 330,
    marginTop: 30
  },
  profileContainer: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
  },
  button: {
    height: 54,
    marginTop: 250,
    width: 300,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0078AE',
    shadowRadius: 5,
    shadowOpacity: 0.7,
    shadowColor: '#0078AE',
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  buttonText: {
    color: "white",
    alignItems: "center",
    fontWeight: "700",
    fontSize: 16,
  },
});
