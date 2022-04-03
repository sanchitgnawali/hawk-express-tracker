import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView} from 'react-native'
import React, {useState, useContext} from 'react'
import {styleSheet} from "../styles/accountStyle"
import Firebase from '../config/firebase';

const SignUp = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styleSheet.container}>
        <Image source={require('../images/hawkExpressLogo.png')} style={styleSheet.image}/>

        <View style={styleSheet.titleContainer}>
        <Text style={styleSheet.titleStyle}>Hawk Express Tracker</Text>
        <Text style={styleSheet.subtitleLabel}>Create new account</Text>
        </View>

        <View style={styleSheet.inputContainer}>
            <Text style={styleSheet.inputLabel}>Name</Text>
            <TextInput placeholder='Bob Smith' style={styleSheet.input}/>

            <Text style={styleSheet.inputLabel}>Email</Text>
            <TextInput placeholder="bsmith1234@uhcl.edu" style={styleSheet.input}/>
            
            <Text style={styleSheet.inputLabel}>Password</Text>
            <TextInput placeholder='********' style={styleSheet.input} secureTextEntry/>
            
            <Text style={styleSheet.inputLabel}>Confirm Password</Text>
            <TextInput placeholder='********' style={styleSheet.input} secureTextEntry/>
        </View>
        
        <View style={styleSheet.buttonContainer}>
            <TouchableOpacity onPress={()=>navigation.navigate('Login')} style={styleSheet.button}>
                <Text style={styleSheet.buttonText}>Create Account</Text>
            </TouchableOpacity> 
        </View>

        <Text style={styleSheet.subtitleStyle}>Already have an account? {' '}
          <Text
            style={{color:'#0078AE'}}
            onPress={()=>navigation.navigate('Login')}>
            Login
          </Text>
        </Text>

    </ScrollView>
  )
}

export default SignUp