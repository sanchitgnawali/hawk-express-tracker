import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from "react-native-maps";
import { auth } from "./../../firebase";
//Files
import uhclStyle from "../styles/mapStyle";

var region = {
  latitude: 29.584,
  longitude: -95.102,
  latitudeDelta: 0.015,
  longitudeDelta: 0.015,
};

const handleSignout = () => {
  auth
    .signOut()
    // need to get navigation back to login working for here
    .catch((error) => alert(error.message));
};

// const imageWidth = Dimensions.get("window").width;

export default MapComponent = () => {
  return (
    <>
      <View style={styles.mapContainer}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          customMapStyle={uhclStyle} // custom style from mapstyles.js
          initialRegion={region}
          showUserLocation
        >
          <Marker
            coordinate={{ latitude: 29.561950133, longitude: -95.115615515 }}
          >
            <Callout>
              <Text>Christ's Church</Text>
            </Callout>
            <Image
              style={styles.markerImage}
              source={require("../images/hawk-logo.png")}
            />
          </Marker>
          <Marker
            coordinate={{
              latitude: 29.552874933427443,
              longitude: -95.12420096370195,
            }}
          >
            <Callout>
              <Text>Bay Area Park and Ride</Text>
            </Callout>
            <Image
              style={styles.markerImage}
              source={require("../images/hawk-logo.png")}
            />
          </Marker>

          <Marker
            coordinate={{
              latitude: 29.569863566531023,
              longitude: -95.11018505215024,
            }}
          >
            <Callout>
              <Text>Coastal Flow Measurement Co.</Text>
            </Callout>
            <Image
              style={styles.markerImage}
              source={require("../images/hawk-logo.png")}
            />
          </Marker>

          <Marker
            coordinate={{
              latitude: 29.574083302941812,
              longitude: -95.10754740123505,
            }}
          >
            <Callout>
              <Text>Anytime Fitness</Text>
            </Callout>
            <Image
              style={styles.markerImage}
              source={require("../images/hawk-logo.png")}
            />
          </Marker>

          <Marker
            coordinate={{
              latitude: 29.57689945321822,
              longitude: -95.10630695303462,
            }}
          >
            <Callout>
              <Text>University Forest Apartments</Text>
            </Callout>
            <Image
              style={styles.markerImage}
              source={require("../images/hawk-logo.png")}
            />
          </Marker>

          <Marker coordinate={{ latitude: 29.578252, longitude: -95.104159 }}>
            <Callout>
              <Image source={require("../images/delta-building.jpg")} />
              <Text>UHCL Delta Building</Text>
            </Callout>
            <Image
              style={styles.markerImage}
              source={require("../images/hawk-logo.png")}
            />
          </Marker>

          <Marker
            coordinate={{
              latitude: 29.578042477429793,
              longitude: -95.1028376873912,
            }}
          >
            <Callout>
              <Text>UHCL Art School for Children and Young Adults</Text>
            </Callout>
            <Image
              style={styles.markerImage}
              source={require("../images/hawk-logo.png")}
            />
          </Marker>

          <Marker
            coordinate={{
              latitude: 29.58665434643349,
              longitude: -95.0949528817226,
            }}
          >
            <Callout>
              <Text>UHCL Police Department</Text>
            </Callout>
            <Image
              style={styles.markerImage}
              source={require("../images/hawk-logo.png")}
            />
          </Marker>

          <Marker
            coordinate={{
              latitude: 29.585956169582044,
              longitude: -95.09822634535767,
            }}
          >
            <Callout>
              <Text>UHCL Recreation and Wellness Center</Text>
            </Callout>
            <Image
              style={styles.markerImage}
              source={require("../images/hawk-logo.png")}
            />
          </Marker>

          <Marker
            coordinate={{
              latitude: 29.58533148291235,
              longitude: -95.09792277159933,
            }}
          >
            <Callout>
              <Text>UHCL Hunter Residence Hall</Text>
            </Callout>
            <Image
              style={styles.markerImage}
              source={require("../images/hawk-logo.png")}
            />
          </Marker>

          <Marker
            coordinate={{
              latitude: 29.584092478872343,
              longitude: -95.09768513897552,
            }}
          >
            <Callout>
              <View style={styles.calloutCustomization}></View>
              <Text>UHCL Student Services and Classroom Building</Text>
            </Callout>
            <Image
              style={styles.markerImage}
              source={require("../images/hawk-logo.png")}
            />
          </Marker>

          <Marker coordinate={{ latitude: 29.582925, longitude: -95.097646 }}>
            <Callout>
              <Image source={require("../images/bayou-building.jpg")} />
              <Text>UHCL Bayou Student Entrance (East)</Text>
            </Callout>
            <Image
              style={styles.markerImage}
              source={require("../images/hawk-logo.png")}
            />
          </Marker>
        </MapView>
        <View style={styles.signOutContainer}>
          <TouchableOpacity onPress={handleSignout} style={styles.button}>
            <Text style={styles.buttonText}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    backgroundColor: "#0782F9",
  },
  signOutContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  button: {
    backgroundColor: "#0782F9",
    width: "25%",
    padding: 10,
    borderRadius: 10,
    position: "absolute",
    bottom: 15,
    right: 10,
  },
  buttonText: {
    color: "white",
    alignItems: "center",
    fontWeight: "700",
    fontSize: 16,
  },
  title: {
    fontSize: 40,
  },
  map: {
    // height: imageWidth * (5 / 3),
    height: "100%",
    zIndex: -1,
  },
  markerImage: {
    width: 30,
    height: 30,
  },
  calloutCustomization: {
    // Hold
  },
});
