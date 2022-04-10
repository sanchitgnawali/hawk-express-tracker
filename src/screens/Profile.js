import { Text, View, Image, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { auth } from "../../firebase";
import {useState} from 'react';
import {styleSheet} from "../styles/accountStyle";
import { useLogout } from "../../hooks/useLogout";
import React from 'react';

export default Profile = ({ navigation }) => {
  const { logout } = useLogout();

  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');

  const handleSignout = () => {
    logout();
    // auth.signOut().catch((error) => alert(error.message));
  };

  return (
    <ScrollView contentContainerStyle={styleSheet.container}>
        <Image source={require('../images/hawk-logo.png')} style={styleSheet.image}/>
            <View style={styleSheet.titleContainer}>
              <Text style={styleSheet.titleStyle}>Edit Profile</Text>
              <Text style={styleSheet.subtitleLabel}>Enter new information, then click save information to update. Leave boxes blank to keep information the same.</Text>
            </View>

      <View style={styleSheet.inputContainer}>
         <Text style={styleSheet.inputLabel}>Email</Text>
         <TextInput placeholder="bsmith1234@uhcl.edu" editable = {true} style={styleSheet.input}/>

         <Text style={styleSheet.inputLabel}>Change Password</Text>
         <TextInput placeholder='********' onChange={(e) => setPassword1(e.target.value)} style={styleSheet.input} secureTextEntry/>

         <Text style={styleSheet.inputLabel}>Re-Enter New Password</Text>
         <TextInput placeholder='********' onChange={(e) => setPassword2(e.target.value)} style={styleSheet.input} secureTextEntry/>
      </View>
      
      <View style={styleSheet.buttonContainer}>

      <TouchableOpacity onPress={()=>{if(password1==password2){console.log("Doesn't work because we're dumb")}}} style={styles.profileButton}>
            <Text style={styleSheet.buttonText}>Confirm Profile Updates</Text>
            </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")} style={styles.profileButton}>
        <Text style={styleSheet.buttonText}>Return to Map</Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
  },
  profileButton: {
    backgroundColor: '#018744',
         height: 54,
         width: '80%',
         borderRadius: 8,
         marginBottom: 10,
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
