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
import { color } from "react-native-reanimated";

export default DestinationSelection = ({ navigation }) => {

  var [submitted, setSubmitted] = useState(false);
  var onpressHandler = ()=> {
    setSubmitted(submitted=true);}

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

  const destinations = [
    {
      stopValue: "christChurch",
      dropOffTimesToMinutes: [440,480,600,680,720,840,950,1030,1070,1125,1165,null]
    },
    {
      stopValue: "parkRide",
      dropOffTimesToMinutes: [445,485,685,725,1035,1075,1130,1170,null]
    },
    {
      stopValue: "coastalFlow",
      dropOffTimesToMinutes: [450,490,605,690,730,845,955,1040,1080,1135,1175,null]
    },
    {
      stopValue: "anytimeFit",
      dropOffTimesToMinutes: [455,495,610,695,735,850,960,1045,1085,1140,1180,null]
    },
    {
      stopValue: "forestApt",
      dropOffTimesToMinutes: [455,495,515,565,580,610,695,735,755,805,820,850,
                    915,930,960,1010,1045,1085,1140,1180,null]
    },
    {
      stopValue: "deltaFront",
      dropOffTimesToMinutes: [460,475,500,515,565,580,595,615,700,715,740,755,
                    805,820,835,855,915,930,945,965,1010,1025,1050,
                    1065,1090,1145,1160,1185,1240,1265,1315,1340,null]
    },
    {
      stopValue: "arbor",
      dropOffTimesToMinutes: [460,475,500,515,565,580,595,615,700,715,740,755,
                    805,820,835,855,915,930,945,965,1010,1025,1050,
                    1065,1090,1145,1160,1175,1240,1265,1315,1340,null]
    },
    {
      stopValue: "five_O",
      dropOffTimesToMinutes: [585,745,825,935,1055,null]
    },
    {
      stopValue: "rec_Center",
      dropOffTimesToMinutes: [465,505,570,585,705,745,810,825,920,935,1015,1055,
                    1150,1230,1255,1305,1335,null]
    },
    {
      stopValue: "huntHall",
      dropOffTimesToMinutes: [465,505,570,585,705,745,810,825,920,935,1015,1055,
                    1150,1230,1255,1305,null]
    },
    {
      stopValue: "sscbEnt",
      dropOffTimesToMinutes: [470,510,575,590,710,750,815,830,925,940,1020,1060,
                    1155,1235,1260,1310,1335,null]
    },
    {
      stopValue: "bayouBuild",
      dropOffTimesToMinutes: [470,510,575,590,710,750,815,830,925,940,1020,1060,
                    1155,1235,1260,1310,1335,null]
    },
  ]

  const currentTotMin = function () {
    let currentHour = new Date().getHours();
    let currentMin = new Date().getMinutes();
    return (60 * currentHour) + currentMin
  };
  
  const getCurrentTime = function(min){
    let remMin = min - currentTotMin();
    let totHour = min/60;
    let roundHour = Math.floor(totHour);
    let totMin = (totHour - roundHour) * 60;
    let roundMin = Math.floor(totMin);
    let amOrpm = "AM";
    if(roundHour > 12)
    {
      roundHour = roundHour - 12
      amOrpm = "PM"
    }
    if(roundMin < 10)
    {
      roundMin = '0' + roundMin;
    }
    return "Shuttle ETA: " + roundHour + ":" + roundMin + " " + amOrpm + " or " + remMin + " minutes";
  };
  
  const matchArrayVal = function (selectedValue) {
    var convertedTime = currentTotMin();
    for(var i = 0; i < items.length; i++)
    {
      if(selectedValue === destinations[i].stopValue)
      {
       for(var j = 0; j < destinations[i].dropOffTimesToMinutes.length; j++)
      {
        if(convertedTime <= destinations[i].dropOffTimesToMinutes[j])
        {
          var nextBusTime = destinations[i].dropOffTimesToMinutes[j]
          var etaTime = nextBusTime - convertedTime;
          convertedTime = convertedTime + etaTime
          var retETATime = getCurrentTime(convertedTime)
          return retETATime;
        }
        else if(destinations[i].dropOffTimesToMinutes[j] == null)
        {
          return "No shuttles available";
        }
      }
      }
    }
  };

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
              matchArrayVal(value);}}
            onSelectItem={onpressHandler}
          />
        </View>

        <View>
          {submitted ? <Text style={styles.etaContainer}>{matchArrayVal(value)}</Text> : null}
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
  etaContainer: {
    marginTop: 50,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#018744'
  },
  button: {
    height: 54,
    marginTop: 650,
    position:'absolute',
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
