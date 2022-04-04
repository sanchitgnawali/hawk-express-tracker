import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, Linking} from 'react-native'
import React, {useState, useContext, useEffect} from 'react'
import {styleSheet} from "../styles/accountStyle"
import { auth } from '../../firebase'

const Login = ({navigation}) => {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.navigate("HomeScreen")
      }
    })

    return unsubscribe
  }, [])

  const handleLogin = () => {
    auth
    .signInWithEmailAndPassword(email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log('Logged in with:', user.email);
    })
    .catch(error => alert(error.message))
  }

  return (
    <ScrollView contentContainerStyle={styleSheet.container}>
        <Image source={require('../images/hawkExpressLogo.png')} style={styleSheet.image}/>

        <View style={styleSheet.titleContainer}>
        <Text style={styleSheet.titleStyle}>Hawk Express Tracker</Text>
        <Text style={styleSheet.subtitleLabel}>Account Login</Text>
          
        </View>

        <View style={styleSheet.inputContainer}>
            <Text style={styleSheet.inputLabel}>Email</Text>
            <TextInput 
              placeholder="bsmith1234@uhcl.edu" 
              value={email}
              onChangeText={text => setEmail(text)}
              style={styleSheet.input}/>
            
            <Text style={styleSheet.inputLabel}>Password</Text>
            <TextInput 
              placeholder='********' 
              value={password}
              onChangeText={text => setPassword(text)}
              style={styleSheet.input} 
              secureTextEntry/>
        </View>

        <View style={styleSheet.buttonContainer}>
            <TouchableOpacity 
              onPress={handleLogin} 
              style={styleSheet.button}
            >
                <Text style={styleSheet.buttonText}>Login</Text>
            </TouchableOpacity>

          <Text style={styleSheet.subtitleStyle}>Don't have an account? {' '}
            <Text
            style={{color:'#0078AE'}}
            onPress={()=>navigation.navigate('Signup')}>
            Sign Up
          </Text>
        </Text>
        </
        View>       
    </ScrollView>
  )
}

export default Login