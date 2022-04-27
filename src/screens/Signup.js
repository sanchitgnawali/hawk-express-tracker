// Screen created by Ryan and Jeff
// Firebase hooks created by Sanchit

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useContext } from "react";
import { styleSheet } from "../styles/accountStyle";
// import { auth } from "../../firebase";
import { useSignup } from "../../hooks/useSignup";

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [check, checkPass] = useState("");
  const [name, setName] = useState("");
  const { signup, error, isPending } = useSignup();

  const handleSignup = () => {
    if (check == password) {
        signup(email, password, name);
        navigation.navigate("HomeScreen");
    }else {
        alert("Passwords do not match")
    }
  };

  return (
    <ScrollView contentContainerStyle={styleSheet.container}>
      <Image
        source={require("../images/hawkExpressLogo.png")}
        style={styleSheet.image}
      />

      <View style={styleSheet.titleContainer}>
        <Text style={styleSheet.titleStyle}>Hawk Express Tracker</Text>
        <Text style={styleSheet.subtitleLabel}>Create new account</Text>
      </View>

      <View style={styleSheet.inputContainer}>
        <Text style={styleSheet.inputLabel}>Name</Text>
        <TextInput
          placeholder="Bob Smith"
          value={name}
          onChangeText={(text) => setName(text)}
          style={styleSheet.input}
        />

        <Text style={styleSheet.inputLabel}>Email</Text>
        <TextInput
          placeholder="bsmith1234@uhcl.edu"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styleSheet.input}
        />

        <Text style={styleSheet.inputLabel}>Password</Text>
        <TextInput
          placeholder="********"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styleSheet.input}
          secureTextEntry
        />

        <Text style={styleSheet.inputLabel}>Confirm Password</Text>
        <TextInput
          placeholder="********"
          value={check}
          onChangeText={(text) => checkPass(text)}
          style={styleSheet.input}
          secureTextEntry
        />
      </View>

      <View style={styleSheet.buttonContainer}>
        <TouchableOpacity onPress={handleSignup} style={styleSheet.button}>
          <Text style={styleSheet.buttonText}>Create Account</Text>
        </TouchableOpacity>
      </View>

      <Text style={styleSheet.subtitleStyle}>
        Already have an account?{" "}
        <Text
          style={{ color: "#0078AE" }}
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </Text>
      </Text>
    </ScrollView>
  );
};

export default SignUp;
