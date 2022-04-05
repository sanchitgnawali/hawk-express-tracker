import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { auth } from "../../firebase";
import { useLogout } from "../../hooks/useLogout";
export default Profile = ({ navigation }) => {
  const { logout } = useLogout();

  const handleSignout = () => {
    logout();
    // auth.signOut().catch((error) => alert(error.message));
  };

  return (
    <View style={styles.profileContainer}>
      <Text style={styles.text}>Welcome to profile</Text>

      <TouchableOpacity onPress={handleSignout} style={styles.button}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
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
  button: {
    backgroundColor: "#0782F9",
    width: "25%",
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    alignItems: "center",
    fontWeight: "700",
    fontSize: 16,
  },
});
