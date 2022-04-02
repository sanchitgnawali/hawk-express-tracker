import React from 'react';

import {KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, Keyboard} from 'react-native';

const KBAWrapper = ({children}) => {
    return (
        <KeyboardAvoidingView behavior="height">
            <ScrollView bounce={false}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    {children}
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

export default KBAWrapper;