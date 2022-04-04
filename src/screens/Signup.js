import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView} from 'react-native'
import React, {useState, useContext} from 'react'
import {styleSheet} from "../styles/accountStyle"
import { auth } from '../../firebase'

const SignUp = ({navigation}) => {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const handleSignup = () => {
    auth 
      .createUserWithEmailAndPassword(email, password)
      .then(navigation.navigate("Login"))
     // .then(userCredentials => {
     //   const user = userCredentials.user;
      //  console.log(user.email);
     // })
      .catch(error => alert(error.message))
  }
  
  return (
    <ScrollView contentContainerStyle={styleSheet.container}>
        <Image source={require('../images/hawkExpressLogo.png')} style={styleSheet.image}/>

        <View style={styleSheet.titleContainer}>
        <Text style={styleSheet.titleStyle}>Hawk Express Tracker</Text>
        <Text style={styleSheet.subtitleLabel}>Create new account</Text>
        </View>

        <View style={styleSheet.inputContainer}>
            <Text style={styleSheet.inputLabel}>Name</Text>
            <TextInput 
              placeholder='Bob Smith' 
              value={name}
              onChangeText={text => setName(text)}
              style={styleSheet.input}
              />

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
            
            <Text style={styleSheet.inputLabel}>Confirm Password</Text>
            <TextInput 
              placeholder='********' 
              value={password}
              onChangeText={text => setPassword(text)}
              style={styleSheet.input} 
              secureTextEntry/>
        </View>
        
        <View style={styleSheet.buttonContainer}>
            <TouchableOpacity 
              onPress={handleSignup}
              style={styleSheet.button}
            >
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