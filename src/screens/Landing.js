// Created by Sean, style by Ryan

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Linking,
} from "react-native";

const Landing = ({navigation}) => {
    return (


        <View style={styles.container}>

                <Image source={require('../images/hawk-logo.png')} style={styles.image}/>
        <View style={styles.titleContainer}>
            <Text style={styles.titleStyle}>Hawk Express Tracker</Text>
            <Text style={styles.subtextStyle}>Rider Edition</Text>
        </View>

            <TouchableOpacity onPress={() => navigation.navigate("Login")} style={styles.button}>
                <Text style={styles.buttonText}>
                Login
                </Text>
            </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate("Signup")} style={styles.button2}>
                            <Text style={styles.buttonText2}>
                            Sign Up
                            </Text>
                        </TouchableOpacity>

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#EFEFEF',
        flexDirection: "column",
        justifyContent: 'center',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

        titleContainer: {
            marginBottom: 80,
            width: '80%',
            alignItems: 'center',
        },

            titleStyle: {
                fontSize: 30,
                marginBottom: -10,
                fontWeight: 'bold',
                //fontWeight: '500',
                color: '#0096D6'
            },
            subtextStyle: {
                marginTop: 10,
                fontSize: 22,
                marginBottom: -10,
                fontWeight: 'bold',
                //fontWeight: '500',
                color: '#0096D6'
            },

      image: {
          //default res w:270, h:150
          height: 300,
          width: 300,
          marginBottom: 10,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 50,
          //marginBottom: 30,
          resizeMode: 'center'
      },

    buttonContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
         height: 54,
         width: '80%',
         borderRadius: 8,
         marginBottom: 10,
         alignItems: 'center',
         justifyContent: 'center',
         backgroundColor: '#69BE28',
         shadowRadius: 5,
         shadowOpacity: 0.7,
         shadowColor: '#0078AE',
         borderWidth: 2,
         borderColor: '#333',

         shadowOffset: {
           width: 0,
           height: 3,
     },

    },
        button2: {
             height: 54,
             width: '80%',
             borderRadius: 8,
             marginTop: 10,
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
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },

        buttonText2: {
            color: 'white',
            fontWeight: '700',
            fontSize: 16,
        },
});

export default Landing