import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

const CustomTextInput = ({value, onChangeText, placeholder, icon, type}) => {
  return (
    <View style={styles.container}>
      <Image />
      <TextInput
        placeholder={placeholder}
        securityTextEntry={type == 'password' ? true : false}
        keyboardType={type ? type : 'default'}
        style={styles.textInput}
      />
    </View>
  );
};

export default CustomTextInput;
const styles = StyleSheet.create({
  container: {
    width: '85%',
    height: 50,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 6,
    alignSelf: 'center',
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  image: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  textInput: {
    marginLeft: 10,
  },
});
