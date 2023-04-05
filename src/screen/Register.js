import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import CustomButton from '../common/CustomButton';
import CustomTextInput from '../common/CustomTextInput';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const saveData = async () => {

    console.log('Saving data...');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Password:', password);

    await AsyncStorage.setItem('NAME', name);
    await AsyncStorage.setItem('EMAIL', email);
    await AsyncStorage.setItem('PASSWORD', password);
    
  console.log('Data saved.');
  
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Register</Text>
      <CustomTextInput
        placeholder={'Enter Name'}
        value={name}
        onChangeText={setName}
      />
      <CustomTextInput
        placeholder={'Enter Email'}
        value={email}
        onChangeText={setEmail}
      />
      <CustomTextInput
        placeholder={'Enter Password'}
        type={'password'}
        value={password}
        onChangeText={setPassword}
      />
      <CustomButton
        title={'Create Account'}
        textColor={'#fff'}
        onPress={() => {
          saveData();
        }}
      />
      <Text
        style={styles.link}
        onPress={() => {
          navigation.navigate('Login');
        }}>
        I have an existing account.
      </Text>
    </View>
  );
};

export default Register;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    marginTop: 50,
    alignSelf: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
  },
  image: {
    width: 70,
    height: 70,
    alignSelf: 'center',
    marginTop: 100,
  },
  link: {
    color: '#2c52b3',
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 20,
    textDecorationLine: 'underline',
  },
});
