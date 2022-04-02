import { StyleSheet } from "react-native";

const styleSheet = StyleSheet.create ({
    container: {
        //flex: 1,
        flexGrow: 1,
        backgroundColor: '#EFEFEF',
        flexDirection: "column",
        justifyContent: 'center',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    scrollContainer: {
        //flex: 1,
        flexGrow: 1,
    },
    image: {
        //default res w:270, h:150
        height: 120,
        width: 240,
        marginTop: 50,
        //marginBottom: 30,
        resizeMode: 'center'
    },
    titleContainer: {
        margin: 20,
        width: '80%',
        alignItems: 'center',
    },
    titleStyle: {
        fontSize: 25,
        marginBottom: -10,
        fontWeight: 'bold',
        //fontWeight: '500',
        color: '#0096D6'
    },
    subtitleLabel: {
        fontSize: 15,
        fontWeight: '500',
        marginTop: 10,
        color: '#838383'
      },
    subtitleStyle: {
      fontSize: 13,
      marginTop: 10,
      color: '#838383'
    },
    inputLabel: {
        color: '#01638F',
        fontSize: 12,
        fontWeight: 'bold',
        marginTop: 5,
        justifyContent: 'flex-start'
    },
    inputContainer: {
        width: '80%',
        //marginTop: -500,
    },
    input: {
        width: '100%',
        backgroundColor: 'white',
        fontStyle: 'italic',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 5,
    },
    selectList: {

    },
    buttonContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    button: {
        backgroundColor: '#018744',
        //width: '100%',
        width: '80%',
        padding: 15,
        borderRadius: 10,
        //justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
})

export {styleSheet}