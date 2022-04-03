import React, {Component} from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

//Files
import uhclStyle from '../styles/mapStyle';

export default class HawkExpressTracker extends Component {
    render() {
        return (
            <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            customMapStyle={uhclStyle} // custom style from mapstyles.js
            initialRegion={region}
            showUserLocation
            />
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
    markerImage: {
      width: 30,
      height: 30,
    },
    calloutCustomization: {
      // Hold
    }
  });

var region = {
    latitude: 29.584,
    longitude: -95.102,
    latitudeDelta: 0.015,
    longitudeDelta: 0.015,
  };