import React, { Component, useState } from "react";
import { StyleSheet, Button, Text, View, Image, Dimensions, TouchableOpacity, Touchable, LogBox } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from "react-native-maps";

import uhclStyle from './mapStyle';

const deltaImage = require("./img/delta-building.jpg");
const bayouImage = require("./img/bayou-building.jpg");

// Ignore log notification by message:
LogBox.ignoreLogs(['Remote debugger']);

export default class hawkExpressTracker extends Component {
  render() {
    return (
      
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        customMapStyle={uhclStyle} // custom style from mapstyles.js
        ref={(ref) => {
          this.map = ref;
        }}
        enableZoomControl={true}
        showsMyLocationButton={true}
        initialRegion={region}
      >

        <Marker coordinate={{ latitude: 29.578252, longitude: -95.104159 }}>
          <Callout>
            <Image source={require("./img/delta-building.jpg")} />
            <Text>Delta Building</Text>
          </Callout>
        </Marker>

        <Marker 
          coordinate={{ latitude: 29.582925, longitude: -95.097646 }}>
          <Callout>
            <Image source={require("./img/bayou-building.jpg")} />
            <Text>Bayou Student Entrance (East)</Text>
          </Callout>
        </Marker>

      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 40,
  },
  map: {
    height: "70%",
  },
});

var region = {
  latitude: 29.584,
  longitude: -95.102,
  latitudeDelta: 0.015,
  longitudeDelta: 0.015,
};
