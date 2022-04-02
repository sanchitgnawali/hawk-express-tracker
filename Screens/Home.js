import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView} from 'react-native'
import React, {useState} from 'react'
import {styleSheet} from "../Components/styleSheet"

const Home = ({navigation}) => { 
  return (
    <ScrollView contentContainerStyle={styleSheet.container}>
        <Image source={require('../assets/hawkExpressLogo.png')} style={styleSheet.image}/>

        <View style={styleSheet.titleContainer}>
        <Text style={styleSheet.titleStyle}>Hawk Express Tracker</Text>
        <Text style={styleSheet.subtitleLabel}>Welcome to your final destination</Text>
        </View>

        <View style={styleSheet.buttonContainer}>
            <TouchableOpacity onPress={()=>navigation.navigate('LoginPage')} style={styleSheet.button}>
                <Text style={styleSheet.buttonText}>Sign Out</Text>
            </TouchableOpacity> 
        </View>      
    </ScrollView>
  )
}

export default Home
