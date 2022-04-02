import styled from 'styled-components';

import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';

import Constants from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight;

const Colors = {
    primary: "#0078AE",
    secondary: "#00B259",
    tertiary: "#EFEFEF",
    colorLink: "#FFFF00"

}

const {primary, secondary, tertiary} = Colors;

export const StyledContainer = styled.View`
    flex: 1;
    padding: 25px;
    paddingTop: ${StatusBarHeight + 10}px;
    backgroundColor: ${tertiary};

`

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
`;

export const PageLogo = styled.Image`
    width: 200px;
    height: 200px;
    resizeMode: center;
`;

export const PageTitle = styled.Text`
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    color: ${primary};
    padding: 10px;
`;

export const Subtitle = styled.Text`
    font-size: 18px;
    margin-bottom: 20px;
    letter-spacing: 1px;
    font-weight: bold;
    color: #838383};
`

export const StyledFormArea = styled.View`
    width: 90%;

`

export const StyleTextInput = styled.TextInput`
    background-color: white;
    padding: 15px;
    padding-left: 10px;
    padding-right: 5px;
    border-radius: 5px;
    font-size: 16px;
    height: 60px;
    margin-vertical: 3px;
    margin-bottom: 10px;
    color: ${secondary}

`;

export const StyledInputLabel = styled.Text`
    color: ${primary};
    fontSize: 13px;
    textAlign: left;

`

export const StyledButton = styled.TouchableOpacity`
    padding: 15px;
    backgroundColor: ${secondary};
    justifyContent: center;
    borderRadius: 5px;
    marginVertical: 5px;
    height: 60px;
    alignItems: center;
    borderColor: black;
`

export const ButtonText = styled.Text`
    color: ${tertiary}
    font-size: 16px;
`
export const ExtraView = styled.View`
    justify-content: center;
    flex-direction: row;
    align-items: center;
    padding: 10px;
`

export const ExtraText = styled.Text`
    justify-content: center;
    align-content: center;
    color: #838383;
    font-size: 15px;
`

export const TextLink = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    padding-left: 5px;
`

export const TextLinkContent = styled.Text`
    color: ${primary};
    font-size: 15px;

`

