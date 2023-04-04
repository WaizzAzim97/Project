import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

const CustomTextInput = ({value, onChangeText, placeholder, icon, type}) => {
    return(
        <View>
            <Image />
            <TextInput
                placeholder={placeholder}
                securityTextEntry={type == 'password' ? true : false}
                keyboardType={type ? type : 'default'} />
        </View>
    )
}