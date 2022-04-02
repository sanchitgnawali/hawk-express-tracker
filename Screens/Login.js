import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, Linking} from 'react-native'
import React, {useState} from 'react'
import {styleSheet} from "../Components/styleSheet"

const Login = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styleSheet.container}>
        <Image source={require('../assets/hawkExpressLogo.png')} style={styleSheet.image}/>

        <View style={styleSheet.titleContainer}>
        <Text style={styleSheet.titleStyle}>Hawk Express Tracker</Text>
        <Text style={styleSheet.subtitleLabel}>Login</Text>
          
        </View>

        <View style={styleSheet.inputContainer}>
            <Text style={styleSheet.inputLabel}>Email</Text>
            <TextInput placeholder="bsmith1234@uhcl.edu" style={styleSheet.input}/>
            
            <Text style={styleSheet.inputLabel}>Password</Text>
            <TextInput placeholder='********' style={styleSheet.input} secureTextEntry/>
        </View>

        <View style={styleSheet.buttonContainer}>
            <TouchableOpacity onPress={()=>navigation.navigate('HomePage')} style={styleSheet.button}>
                <Text style={styleSheet.buttonText}>Login</Text>
            </TouchableOpacity>

          <Text style={styleSheet.subtitleStyle}>Don't have an account? {' '}
            <Text
            style={{color:'#0078AE'}}
            onPress={()=>navigation.navigate('SignUpPage')}>
            Sign Up
          </Text>
        </Text>
        </
        View>       
    </ScrollView>
  )
}

export default Login
