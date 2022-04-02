import React from 'react-native';
import { StatusBar } from 'expo-status-bar';

import {Formik} from 'formik';

import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    Subtitle,
    StyledFormArea,
    StyleTextInput,
    StyledInputLabel,
    StyledButton,
    ButtonText,
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkContent,


} from './styles/styles';



import {View} from 'react-native';

import KBAWrapper from './styles/KBAv.js';

const Login = () => {
    return (
       <KBAWrapper><StyledContainer>
            <StatusBar style="secondary"/>
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('./LogoFin.png')}/>
                <PageTitle>Hawk Express Tracker</PageTitle>
                <Subtitle>Account Login</Subtitle>

                <Formik
                    initialValues={{ email: '', password: ''}}
                    onSubmit={(values) => {
                        console.log(values);
                    }}>
                    {({ handleChange, handleBlur, handleSubmit, values }) => (<StyledFormArea>

                        <MyInput
                            label="Email Address"
                            placeholder="student@uhcl.edu"
                            onChangeText={handleChange('email')}
                            onBlur={handleChange('email')}
                            values={values.email}
                            keyboardType="email-address"

                        />
                         <MyInput
                           label="Password"
                            placeholder="* * * * * * * * *"
                            onChangeText={handleChange('password')}
                            onBlur={handleChange('password')}
                            values={values.password}
                            secureTextEntry={true}


                            />
                            <StyledButton onPress={handleSubmit}>
                                <ButtonText>
                                    Login
                                </ButtonText>
                             </StyledButton>
                             <ExtraView>
                                <ExtraText>Don't have an account?</ExtraText>
                                <TextLink>
                                    <TextLinkContent>Signup.</TextLinkContent>
                                </TextLink>
                             </ExtraView>


                    </StyledFormArea>)}
                </Formik>


            </InnerContainer>

        </StyledContainer></KBAWrapper>
    );
}

const MyInput = ({ label, icon, ...props }) => {
    return (<View>
        <StyledInputLabel>{label}</StyledInputLabel>
        <StyleTextInput {...props} />
        </View>);
};


export default Login;