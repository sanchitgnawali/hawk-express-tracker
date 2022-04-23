import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { auth } from "../../firebase";
import { useState, useEffect } from "react";
import { styleSheet } from "../styles/accountStyle";
import { useLogout } from "../../hooks/useLogout";
import React from "react";

export default Profile = ({ navigation }) => {
  const { logout } = useLogout();

  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");

  const updatePassword = () => {
    if (!password1 && !password2) {
      alert("Passwords can't be left blank.");
    } else if (password1 === password2) {
      const user = auth.currentUser;

      user
        .updatePassword(password1)
        .then(() => {
          alert("Password updated.");
        })
        .catch((error) => {
          alert(error.message);
        });
    } else {
      alert("Passwords you entered don't match. Please retype and try again.");
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserEmail(user.email);
        setUserName(user.displayName);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <ScrollView contentContainerStyle={styleSheet.container}>
      <Image source={require("../images/hawk-logo.png")} style={styles.image} />
      <View style={styleSheet.titleContainer}>
        <Text style={styleSheet.titleStyle}>Welcome, {userName} </Text>
        <Text style={styleSheet.subtitleLabel}>Enter new information and click "Confirm Profile Updates". Leave boxes blank to keep information the same.
        </Text>
      </View>

      <View style={styleSheet.inputContainer}>
        <Text style={styleSheet.inputLabel}>Email</Text>
        <TextInput
          placeholder="bsmith1234@uhcl.edu"
          editable={false}
          style={styleSheet.input}
          value={userEmail}
        />

        <Text style={styleSheet.inputLabel}>Change Password</Text>
        <TextInput
          placeholder="********"
          value={password1}
          onChangeText={(text) => setPassword1(text)}
          style={styleSheet.input}
          secureTextEntry
        />

        <Text style={styleSheet.inputLabel}>Re-Enter New Password</Text>
        <TextInput
          placeholder="********"
          value={password2}
          onChangeText={(text) => setPassword2(text)}
          style={styleSheet.input}
          secureTextEntry
        />
      </View>

      <View style={styleSheet.buttonContainer}>
        <TouchableOpacity onPress={updatePassword} style={styles.profileButton}>
          <Text style={styleSheet.buttonText}>Confirm Profile Updates</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("HomeScreen")}
          style={styles.profileButton}
        >
          <Text style={styleSheet.buttonText}>Return to Map</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 200,
    marginTop: 50,
    marginBottom: 20,
  },
  profileContainer: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
  },
  profileButton: {
    backgroundColor: "#018744",
    height: 54,
    width: "80%",
    borderRadius: 8,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0078AE",
    shadowRadius: 5,
    shadowOpacity: 0.7,
    shadowColor: "#0078AE",

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
