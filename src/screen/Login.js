import React, {useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import CustomTextInput from '../common/CustomTextInput';
import CustomButton from '../common/CustomButton';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [badEmail, setBadEmail] = useState('');
  const [badPassword, setBadPassword] = useState('');

  const navigation = useNavigation();

  const validate = () => {
    if (email === '') {
      setBadEmail(true);
    } else {
      setBadEmail(false);
    }

    if (password === '') {
      setBadPassword(true);
    } else {
      setBadPassword(false);
    }
    login();
  };
  const login = async () => {
    const saveEmail = await AsyncStorage.getItem('EMAIL');
    const savePassword = await AsyncStorage.getItem('PASSWORD');
    if (saveEmail === email && savePassword === password) {
      navigation.navigate('Home');
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <CustomTextInput
        placeholder={'Email'}
        value={email}
        onChangeText={setEmail}
      />
      {badEmail === true && <Text style={styles.error}>Email invalid</Text>}
      <CustomTextInput
        placeholder={'Password'}
        type={'password'}
        value={password}
        onChangeText={setPassword}
      />
      {badPassword === true && (
        <Text style={styles.error}>Password invalid</Text>
      )}

      <CustomButton
        title={'Login'}
        textColor={'#fff'}
        onPress={() => {
          validate();
        }}
      />

      <Text
        style={styles.link}
        onPress={() => {
          navigation.navigate('Register');
        }}>
        Create an Account.
      </Text>
    </View>
  );
};

export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 70,
    height: 70,
    alignSelf: 'center',
    marginTop: 100,
  },
  title: {
    marginTop: 50,
    alignSelf: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
  },
  link: {
    color: '#2c52b3',
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 20,
    textDecorationLine: 'underline',
  },
  error: {
    alignSelf: 'center',
    color: 'red',
  },
});
